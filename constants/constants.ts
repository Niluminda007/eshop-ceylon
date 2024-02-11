import { CategoryType } from "@/types/types";
import sliderImageOne from "@/public/assets/slider_img_1.png";
import sliderImageTwo from "@/public/assets/slider_img_2.png";
import sliderImageThree from "@/public/assets/slider_img_3.png";
import spiceCategoryImage from "@/public/assets/spices_category.jpg";
import bisuitsCategoryImage from "@/public/assets/biscuits_category.jpg";
import packagedCategoryImage from "@/public/assets/packaged_category.png";

export const categoires: CategoryType[] = [
  { id: 0, name: "All" },
  { id: 1, name: "Spices" },
  { id: 2, name: "Biscuits" },
  { id: 3, name: "Packaged Foods" },
  { id: 4, name: "Other Products" },
];

export const sliderImages = [sliderImageOne, sliderImageTwo, sliderImageThree];

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
    link: "/home/category/Packaged%20Foods",
  },
];
