import User from "@/models/userModel";
import { encrypt } from "@/utils/lib";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userName, password } = await req.json();

    const user = await User.findOne({ userName: userName });
    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }
    if (user.password === password) {
      const expires = new Date(Date.now() + 5 * 60 * 1000);
      const session = await encrypt({ user, expires });

      cookies().set("session", session, { expires, httpOnly: true });

      return NextResponse.json(
        { message: "Login Successful" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Incorrect Password" },
        { status: 401 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
