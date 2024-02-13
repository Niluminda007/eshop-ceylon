import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import { ProductType } from "@/types/types";
import Product from "@/models/models";

export async function POST(
  req: NextRequest
): Promise<NextResponse<ProductType[]> | Response> {
  try {
    const { categoryName } = await req.json();
    await connectToDB();
    const products: ProductType[] = await Product.find({
      "category.name": categoryName,
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products ", error);
    return NextResponse.json(error);
  }
}
