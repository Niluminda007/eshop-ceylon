"use client";

import CategoryBar from "@/components/Home/CategoryBar";
import { ProductType } from "@/types/types";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.post("/api/fetch-products-category", {
        categoryName: "Spices",
      });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="w-full h-full flex flex-col px-16 py-8 ">
      <CategoryBar />

      <div className="flex flex-wrap gap-4">
        {products &&
          products.map((product) => (
            <div
              className="w-32 h-32"
              key={product.id}
              style={{
                backgroundImage: `url('${product.images[0].url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Home;
