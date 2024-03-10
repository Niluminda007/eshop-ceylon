import {
  CategoryType,
  HomeSliderType,
  SpecialProductSliderData,
} from "@/types/types";
import spiceCategoryImage from "@/public/assets/spices_category.jpg";
import bisuitsCategoryImage from "@/public/assets/biscuits_category.jpg";
import packagedCategoryImage from "@/public/assets/packaged_category.png";
import swanImage from "@/public/images/slider/swan.jpg";
import flowerImage from "@/public/images/slider/flower.jpg";
import cuteAnimal from "@/public/images/slider/cute_animal.jpg";

export const categoires: CategoryType[] = [
  { id: 0, name: "All", path: "All", topLevelCategory: false },
  {
    id: 1,
    name: "Spices",
    path: "Spices",
    image: "eshop-ceylon/categories/spices_category_d5xyfj.jpg",
    topLevelCategory: true,
  },
  {
    id: 2,
    name: "Biscuits",
    path: "Biscuits",
    image: "eshop-ceylon/categories/biscuits_category_arma9y.jpg",
    topLevelCategory: true,
  },
  {
    id: 3,
    name: "Packaged Foods",
    path: "Packaged_Foods",
    image: "eshop-ceylon/categories/packaged_category_vsdm8l.png",
    topLevelCategory: true,
  },
  {
    id: 4,
    name: "Other Products",
    path: "Other_Products",
    topLevelCategory: false,
  },
];

export const sliderImages = [
  "eshop-ceylon/image_slider/slider_img_1_q8wl22.png",
  "eshop-ceylon/image_slider/slider_img_2_bs6qed.png",
  "eshop-ceylon/image_slider/slider_img_3_nzrygd.png",
];

export const shopByCategoryImages = [
  { name: "Spices", image: spiceCategoryImage, link: "/home/category/Spices" },
  {
    name: "Bisuits",
    image: bisuitsCategoryImage,
    link: "/home/category/Biscuits",
  },
  {
    name: "Packaged Foods",
    image: packagedCategoryImage,
    link: "/home/category/Packaged_Foods",
  },
];

export const navCategories = [
  { id: "#all_products", name: "All Products", path: "/all" },
  {
    id: "#spices",
    name: "Spices",
    path: "/spices",
  },
  {
    id: "#biscuits",
    name: "Biscuits",
    path: "/biscuits",
  },
  {
    id: "#packaged_foods",
    name: "Packaged Foods",
    path: "/packaged_foods",
  },
  {
    id: "#other_products",
    name: "Other Products",
    path: "/other_products",
  },
];

// export const homeSliderData: HomeSliderType[] = [
//   {
//     id: 1,
//     image: swanImage,
//     content: "Demo text displaying what should render",
//   },
//   { id: 2, image: cuteAnimal, content: "yes this is a demo content" },
//   { id: 3, image: flowerImage, content: "nahhh, are you sure" },
// ];

export const homeSliderData: HomeSliderType[] = [
  {
    id: 1,
    image: "eshop-ceylon/image_slider/slider_img_1_q8wl22.png",
    content: "Order Today and get free delivery On your products",
  },
  {
    id: 2,
    image: "eshop-ceylon/image_slider/slider_img_2_bs6qed.png",
    content: "Sri Lankan Taste, Here in Europe",
  },
  {
    id: 3,
    image: "eshop-ceylon/image_slider/slider_img_3_nzrygd.png",
    content: "Check Out our new Products",
  },
];

export const specialProductSliderData: SpecialProductSliderData[] = [
  {
    id: 1,
    name: "New Arrivals",
    fetch_path: "/api/fetch/products/new-arrivals",
  },
  {
    id: 2,
    name: "Best Selling",
    fetch_path: "/api/fetch/products/best-selling",
  },
];
