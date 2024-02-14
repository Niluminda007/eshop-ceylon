import Product from "@/models/productModel";
import { ProductType } from "@/types/types";

import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
): Promise<NextResponse<ProductType> | Response> {
  try {
    const { productId } = await req.json();
    await connectToDB();
    const product = await Product.findOne({ id: productId });
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching products ", error);
    return NextResponse.json(error);
  }
}
