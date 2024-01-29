import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import products from "@/constants/products";
import Product from "@/models/models";

export async function GET() {
  try {
    await connectToDB();
    for (const product of products) {
      await Product.create(product);
    }

    return NextResponse.json({ message: "Products Initialized Successfully" });
  } catch (error) {
    console.error("Error adding products to the database:", error);
    return NextResponse.error;
  }
}
