import { CategoryType } from "@/types/types";
import createAxiosInstance from "@/utils/axiosInstance";
import { useState } from "react";

const useFetchCategories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<CategoryType[]>([]);
  const [error, setError] = useState<any>(null);
  const fetchCategories: any = async () => {
    try {
      setIsLoading(true);
      const axiosInstance = createAxiosInstance();
      const response = await axiosInstance.get("/fetch/category");

      setData(response.data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      setIsLoading(false);
    }
  };
  return { isLoading, data, error, fetchCategories };
};

export { useFetchCategories };
