import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import { ProductType } from "@/types/types";
import Product from "@/models/models";

export async function POST(req: NextRequest) {
  try {
    let { categoryName } = await req.json();
    await connectToDB();
    let products: ProductType[] = [];

    categoryName = (categoryName as string).replace("%20", " ");
    if (categoryName === "All") {
      products = await Product.find({});
    } else {
      products = await Product.find({ "category.name": categoryName });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products ", error);
    return NextResponse.error;
  }
}
