import Product from "@/models/productModel";
import { ProductType } from "@/types/types";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<ProductType[]> | Response> {
  try {
    await connectToDB();
    const newProducts = await Product.find({});

    return NextResponse.json({ data: "" });
  } catch (error) {
    console.error("Error fetching products ", error);
    return NextResponse.json(error);
  }
}
