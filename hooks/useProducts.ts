import { UseFetchProductType } from "@/types/types";
import createAxiosInstance from "@/utils/axiosInstance";
import { useState } from "react";

const useFetchProduct = ({
  http_Method,
  end_point,
  payload,
}: UseFetchProductType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const fetchProduct: any = async () => {
    try {
      setIsLoading(true);
      const axiosOptions = {
        method: http_Method,
        headers: {
          "Content-Type": "application/json",
        },
        url: end_point,
        data: JSON.stringify(payload),
      };
      const axiosInstance = createAxiosInstance();
      const response = await axiosInstance(axiosOptions);
      setData(response.data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      setIsLoading(false);
    }
  };
  return { fetchProduct, isLoading, data, error };
};

// const useFetchProductByCategory = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [data, setData] = useState<ProductType[]>([]);
//   const [error, setError] = useState<any>(null);
//   const fetchProductByCategory: any = async (categoryName: string) => {
//     try {
//       setIsLoading(true);
//       const axiosInstance = createAxiosInstance();
//       const response = await axiosInstance.post("/fetch/category", {
//         categoryName: categoryName,
//       });
//       setData(response.data);
//       setIsLoading(false);
//     } catch (err: any) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };
//   return { fetchProductByCategory, isLoading, data, error };
// };

// const useFetchProductByProductId = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [data, setData] = useState<ProductType>(defaultProduct);
//   const [error, setError] = useState<any>(null);

//   const fetchProductByProductId = async (productId: string) => {
//     try {
//       const axiosInstance = createAxiosInstance();
//       const response = await axiosInstance.post("/fetch/products", {
//         productId: productId,
//       });
//       setData(response.data);
//       setIsLoading(false);
//     } catch (error: any) {
//       setError(error);
//       setIsLoading(false);
//     }
//   };
//   return { fetchProductByProductId, isLoading, data, error };
// };

// const useGetNewProducts = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [data, setData] = useState<ProductType[]>([]);
//   const [error, setError] = useState<any>(null);

//   const fetchNewProducts = async () => {
//     try {
//       const axiosInstance = createAxiosInstance();
//       const response = await axiosInstance.get(
//         "/fetch/products/new-arrivals",
//         {}
//       );
//       setData(response.data);
//       setIsLoading(false);
//     } catch (error: any) {
//       setError(error);
//       setIsLoading(false);
//     }
//   };
//   return { fetchNewProducts, isLoading, data, error };
// };

// const useBestSellingProducts = () => {
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [data, setData] = useState<ProductType[]>([]);
//   const [error, setError] = useState<any>(null);
//   const fetchBestSellingProducts = async () => {
//     try {
//       setIsLoading(true);
//       const axiosInstance = createAxiosInstance();
//       const response = await axiosInstance.get("/fetch/products/best-selling");
//       setData(response.data);
//       setIsLoading(false);
//     } catch (error: any) {
//       setError(error);
//       setIsLoading(false);
//     }
//   };
//   return { fetchBestSellingProducts, isLoading, data, error };
// };

// export {
//   useFetchProductByCategory,
//   useFetchProductByProductId,
//   useGetNewProducts,
//   useBestSellingProducts,
//   useFetchProduct,
// };

export { useFetchProduct };

// improve this
