import { categoires } from "@/constants/constants";
import Category from "@/models/categoryModel";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
): Promise<NextResponse<{ message: string }> | Response> {
  try {
    await connectToDB();
    for (const category of categoires) {
      await Category.create(category);
    }
    return NextResponse.json({
      message: "Categories successfully initialized",
    });
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}
