import { ProductType } from "@/types/types";
import createAxiosInstance from "@/utils/axiosInstance";
import { defaultProduct } from "@/utils/defaults";
import { useState } from "react";

const useFetchProductByCategory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductType[]>([]);
  const [error, setError] = useState<any>(null);
  const fetchProductByCategory: any = async (categoryName: string) => {
    try {
      setIsLoading(true);
      const axiosInstance = createAxiosInstance();
      const response = await axiosInstance.post("/fetch/category", {
        categoryName: categoryName,
      });
      setData(response.data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      setIsLoading(false);
    }
  };
  return { fetchProductByCategory, isLoading, data, error };
};

const useFetchProductByProductId = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<ProductType>(defaultProduct);
  const [error, setError] = useState<any>(null);

  const fetchProductByProductId = async (productId: string) => {
    try {
      const axiosInstance = createAxiosInstance();
      const response = await axiosInstance.post("/fetch/products", {
        productId: productId,
      });
      setData(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  };
  return { fetchProductByProductId, isLoading, data, error };
};

export { useFetchProductByCategory, useFetchProductByProductId };
