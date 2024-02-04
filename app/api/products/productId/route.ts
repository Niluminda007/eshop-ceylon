import Product from "@/models/models";

import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    await connectToDB();
    const product = await Product.findOne({ id: productId });
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching products ", error);
    return NextResponse.error;
  }
}
