import Product from "@/models/productModel";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(response: NextResponse | Response) {
  try {
    await connectToDB();

    const bestSellingProducts = await Product.find({})
      .sort({ sellCount: -1 })
      .limit(10);
    return NextResponse.json(bestSellingProducts);
  } catch (error) {
    console.error("Error fetching products ", error);
    return NextResponse.json(error);
  }
}
