import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";
import { CategoryType, ProductType } from "@/types/types";
import Product from "@/models/productModel";
import Category from "@/models/categoryModel";

export async function POST(
  req: NextRequest
): Promise<NextResponse<ProductType[]> | Response> {
  try {
    let { categoryName } = await req.json();
    await connectToDB();
    let products: ProductType[] = [];

    categoryName = (categoryName as string).replace("_", " ");
    if (categoryName === "All") {
      products = await Product.find({});
    } else {
      products = await Product.find({ "category.name": categoryName });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products ", error);
    return NextResponse.json(error);
  }
}

export async function GET(): Promise<NextResponse<CategoryType[]> | Response> {
  try {
    console.log("Hello");
    await connectToDB();
    const categoires: CategoryType[] = await Category.find({});
    return NextResponse.json(categoires);
  } catch (error) {
    console.error("Error fetching categories ", error);
    return NextResponse.json(error);
  }
}
