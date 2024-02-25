import User from "@/models/userModel";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const newUser = await request.json();
    const existingUser = await User.findOne({
      $or: [{ userName: newUser.userName }, { email: newUser.email }],
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists with the same email or username" },
        { status: 409 }
      );
    }

    const user = await User.create(newUser);

    return NextResponse.json(
      { message: "User Created Successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
