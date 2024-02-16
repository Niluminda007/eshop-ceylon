import { CategoryType } from "@/types/types";
import spiceCategoryImage from "@/public/assets/spices_category.jpg";
import bisuitsCategoryImage from "@/public/assets/biscuits_category.jpg";
import packagedCategoryImage from "@/public/assets/packaged_category.png";

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
