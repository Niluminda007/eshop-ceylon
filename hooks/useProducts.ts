import { ProductType } from "@/types/types";
import createAxiosInstance from "@/utils/axiosInstance";
import { useState } from "react";

const useFetchProductByCategory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductType[]>([]);
  const [error, setError] = useState<any>(null);
  const fetchProductByCategory: any = async (categoryName: string) => {
    try {
      setIsLoading(true);
      const axiosInstance = createAxiosInstance();
      const response = await axiosInstance.post("/products/category", {
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

export { useFetchProductByCategory };
