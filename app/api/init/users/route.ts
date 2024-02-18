import User from "@/models/userModel";
import { UserRegisterModel } from "@/types/types";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
  const testUserLoginModel: UserRegisterModel = {
    name: "admin admin",
    userName: "admin",
    password: "admin",
    telephone: "9876543210",
    email: "admin@example.com",
    address: "456 Oak St, Townsville, Country",
  };
  try {
    await connectToDB();
    await User.create(testUserLoginModel);
    return NextResponse.json({ message: "User added successfully" });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
}
