import { ProductType } from "@/types/types";

const products: ProductType[] = [
  {
    id: "chili_powder_spices",
    name: "Chili Powder",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "Manufactured using premium quality dried chilli under the strict hygienic conditions. The products are packed in specially designed laminated pouches to preserve their freshness, flavor and to enhance the shelf life. ",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/chilli_powder_u46ps1.webp",
      },
    ],
  },
  {
    id: "chicken_curry_powder_spices",
    name: "Chicken Curry Powder",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "This is an extraordinary spice mix formulated to enhance the natural flavor of raw and processed meat. The processing conditions are carefully controlled to preserve its unique flavor.",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/chicken_curry_powder_cwmwqx.webp",
      },
    ],
  },
  {
    id: "curry_powder_spices",
    name: "Curry Powder",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "Curry powders is produced using highest quality ingredients such as Coriander,Cumin seed and fennel seed as the major ingredients.These products are specially formulated to enhance the flavor of cooked meat, fish, vegetables etc. No added artificial flavor enhancers such as MSG. Ingredients are thoroughly cleaned prior to milling and the milling is carried out under strict hygienic conditions. Products are packed in specially designed laminated pouches to preserve their freshness, flavor, and to enhance the shelf life.",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/amu_thunapaha_kudu_fgwh8o.webp",
      },
    ],
  },
  {
    id: "roasted_curry_powder_spices",
    name: "Roasted Curry Powder",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "Roasted Curry powders is produced using highest quality ingredients such as Coriander, Cumin seed and fennel seed as the major ingredients. These products are specially formulated to enhance the flavor of cooked meat, fish, vegetables etc. No added artificial flavor cantains such as MSG. Ingredients are thoroughly cleaned prior to milling and the milling is carried out under strict hygienic conditions. Products are packed in specially designed laminated pouches to preserve their freshness, flavor, and to enhance the shelf life",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/badapu_thunapaha_kudu_ws1tqr.webp",
      },
    ],
  },
  {
    id: "chili_flex_spices",
    name: "Chili Flex",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "Chilli Pieces is manufactured using premium quality dried chilli under the strict hygienic conditions. The products are packed in specially designed laminated pouches to preserve their freshness, flavor and to enhance the shelf life. ",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/kali_miris_r1yakk.webp",
      },
    ],
  },
  {
    id: "rampe_spices",
    name: "Rampe",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "The leaves are thin long green leaves. The leaves can be used either fresh or dried. ... The leaves are a vital savoring agent used to savor curries, rice, savories and sweet dishes. Sometimes the rampe leaves are grinded and filtered to take out their zest and hue for cakes and sweets to give a lovely flavor.",
    weight: "50g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/rampe_gh9d0e.webp",
      },
    ],
  },
  {
    id: "karapincha_spices",
    name: "Karapincha",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "Curry leaves are small in size and long, slender, and oval in shape narrowing to a point, averaging 2-4 centimeters in length and 1-2 centimeters in width. The shiny, dark green leaves grow pinnately along a stem, and each branch can hold up to twenty, tightly clustered leaves.",
    weight: "50g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/curry_leaves_udjmcn.webp",
      },
    ],
  },
  {
    id: "cardamom_spices",
    name: "Cardamom",
    price: 1.2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Spices",
      topLevelCategory: true,
    },
    description:
      "Popularly known as the 'Queen of Spices', 'Mc Currie' cardamoms are widely used in flavouring savoury and sweet dishes. The whole or ground cardamom adds a characteristic taste to meat and vegetable curries. Cardamoms can be used in cakes to give that subtle taste",
    weight: "8g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/cardamam_fbusnw.webp",
      },
    ],
  },
  {
    id: "maliban_gold_marie_biscuits",
    name: "Maliban Gold Marie",
    price: 1.9,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "An all-time children's favourite the Maliban Gold Marie biscuit comes in a handy size and a variety of packs. This biscuit, made with love, is packed with the wholesome goodness of milk and loads of essential vitamins. It is the mother's choice for their precious child.",
    weight: "80g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/gold_marie_ulkkly.webp",
      },
    ],
  },
  {
    id: "maliban_chocolate_biscuits_biscuits",
    name: "Maliban Chocolate Biscuits",
    price: 2.1,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "Made from a generations-old secret recipe, using the world's finest cocoa beans that create the creamy delicious chocolate filling and give the biscuit a rich chocolate taste. Real Chocolate, Real Taste.",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/chocalte_biscuits_xmi5hd.webp",
      },
    ],
  },
  {
    id: "munchee_cream_cracker_super_biscuits",
    name: "Munchee Cream Cracker Super",
    price: 2.2,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "The jewel in our cracker crown, this iconic vitamin enriched cracker is light, flaky and sugar free, baked to contain air pockets on its surface for the perfect crisp.",
    weight: "125g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/super_cream_cracker_uc6ocp.webp",
      },
    ],
  },
  {
    id: "munchee_lemon_puff_biscuits",
    name: "Munchee Lemon Puff",
    price: 2.1,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "Tangy lemon-flavoured sweet cream sandwiched between two very light and crispy scalloped-edged, sugar sprinkled golden biscuits.",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/lemon_puff_yrswwa.webp",
      },
    ],
  },
  {
    id: "munchee_chocalate_puff_biscuits",
    name: "Munchee Chocalate Puff",
    price: 2.1,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "A sweet Smooth flavoured chocolate cream between two crispy yet puffy biscuits",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/chocalte_puff_x0y2uh.webp",
      },
    ],
  },
  {
    id: "munchee_hawainee_cookies_biscuits",
    name: "Munchee Hawainee Cookies",
    price: 2.1,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "It is the true taste of Hawai, packed into an easy-to-serve pack. Although the biscuit resembles other Hawaiian Cookie products in the market in shape and size, they are miles apart from the rest; baked to crunchy perfection with an overwhelmingly rich burst of Coconut flavour.",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/hawaian_cookies_zexnnm.webp",
      },
    ],
  },
  {
    id: "ginger_biscuits_biscuits",
    name: "Ginger Biscuits",
    price: 2.1,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "Spicy and sweet punch of ginger biscuit adds a unique taste  that makes many people love it. Perfect partner to a hot cup of tea. You are sure to enjoy it over and over. ",
    weight: "100g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/ginger_biscuits_ctgw0y.webp",
      },
    ],
  },
  {
    id: "samaposha_biscuits",
    name: "Samaposha",
    price: 2.9,
    category: {
      id: 2,
      name: "Biscuits",
      path: "/Biscuits",
      topLevelCategory: true,
    },
    description:
      "Samaposha is a pre-cooked cereal based nutritious supplement food which consist of corn, soya, green gram and rice. It is enriched with lot of vitamins and minerals. ",
    weight: "200g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/biscuits/samaposha_amhtth.webp",
      },
    ],
  },
  {
    id: "chili_pastes_packaged_foods",
    name: "Chili Pastes",
    price: 5.99,
    category: {
      id: 3,
      name: "Packaged Foods",
      path: "/Packaged_Foods",
      topLevelCategory: true,
    },
    description:
      "A blend of authentic ingredients, Chillie Paste is a 'rice puller' when combined into a menu featuring Yellow Rice, Ghee Rice, Fried Rice and even the good old plain white rice,will tantalize your taste buds and is a preservative free product. Chillie Paste is best consumed with Yellow Rice, Ghee Rice, Fried Rice, Nasigoreng and even plain rice. A light spread of Chinese Chillie Paste in a sandwich makes a great snack.",
    weight: "250g",
    inStock: false,
    images: [
      {
        url: "eshop-ceylon/packaged_foods/chillipaste_packaged_mrkcyu.webp",
      },
    ],
  },
  {
    id: "brinjal_moju_(batumoju)_packaged_foods",
    name: "Brinjal Moju (Batumoju)",
    price: 4.49,
    category: {
      id: 3,
      name: "Packaged Foods",
      path: "/Packaged_Foods",
      topLevelCategory: true,
    },
    description:
      "A favourite Sri Lankan dish, made in homes to preserve the seasonal aubergines. A sweet and spicy light pickle packed with flavours. Fried Aubergine (Brinjal), whole green chillies, fried sprats, and onions. Lightly spiced and preserved to readily bring the taste of Sri Lanka to your meals. The heat from the chillies is intricately woven through the subtle tanginess of the vinegar and the slight sweetness from the fried aubergines and onions married with the aroma of the fried sprats. All combine to bring complex yet delicate flavours together.",
    weight: "200g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/packaged_foods/batumoju_packaged_tzrjaq.webp",
      },
    ],
  },
  {
    id: "fried_dried_sprats_(halmasso_badum)_packaged_foods",
    name: "Fried Dried Sprats (Halmasso Badum)",
    price: 5.99,
    category: {
      id: 3,
      name: "Packaged Foods",
      path: "/Packaged_Foods",
      topLevelCategory: true,
    },
    description:
      "Fried Dried Sprats Badum is prepared with the finest ingredients and is taste bud tantalizing accompaniment with plain rice, coconut sambol and tempered dhal curry",
    weight: "200g",
    inStock: false,
    images: [
      {
        url: "eshop-ceylon/packaged_foods/halmasso_packaged_qryk7w.webp",
      },
    ],
  },
  {
    id: "coconut_sambol_packaged_foods",
    name: "Coconut Sambol",
    price: 5.99,
    category: {
      id: 3,
      name: "Packaged Foods",
      path: "/Packaged_Foods",
      topLevelCategory: true,
    },
    description:
      "Shreds of coconut married with dried red chilli, onion and spices. A staple of Sri Lankan cuisine. No Sri Lankan breakfast table is complete without it!",
    weight: "325g",
    inStock: false,
    images: [
      {
        url: "eshop-ceylon/packaged_foods/sambol_packaged_y4zukl.webp",
      },
    ],
  },
  {
    id: "dry_sprats_(halmasso)_other_products",
    name: "Dry Sprats (Halmasso)",
    price: 3.5,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "The product quality is very premium and we pack efficiently and parcel carefully so the quality of the product remains intact. It is a dry fish item. It is sun Dried, Sustainable, Sri Lankan fish.  Also named Sprat is the name applied to several species of small, oily fishes belonging to the herring family. They look like miniature sardines and are recognized by the sharp scales along the belly. … Products sold as having been prepared from anchovies and sardines are sometimes actually prepared from sprats.",
    weight: "200g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/dried_sprats_v66eqi.webp",
      },
    ],
  },
  {
    id: "soya_meat_other_products",
    name: "Soya meat",
    price: 2.1,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Enjoy the taste of an authentic Sri Lankan Dallo devil or Prawn Devil Flavor . Just add the blend of spices with chicken flavour, and enjoy with any meal. No added MSG or any artificial flavour enhancers.",
    weight: "90g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/soya_meat_prawns_ig0gfk.webp",
      },
      {
        url: "eshop-ceylon/other_products/soya_meat_dallo_wb4kgy.webp",
      },
    ],
  },
  {
    id: "red_rice_other_products",
    name: "Red Rice",
    price: 4.1,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Richer in protein than white rice, Sri Lankan red rice is a gluten-free whole grain rice suitable for vegans, vegetarians, and vegans. To be cooked with coconut for a real trip to Sri Lankan lands.",
    weight: "400g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/red_rice_ytuorp.webp",
      },
    ],
  },
  {
    id: "koththu_mee_other_products",
    name: "Koththu Mee",
    price: 1.9,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Prima Kottumee a second generation Noodle brand with the addition of a hot chillie Oil sachet as well as a spicy seasoning sachet holds a differentiated space of being the 'Hot & Spicy' Noodles. Prima KottuMee is the most preferred instant noodle brand in the island.",
    weight: "80g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/kottu_mee_qewzwo.webp",
      },
    ],
  },
  {
    id: "raththi_milk_powder_other_products",
    name: "Raththi Milk Powder",
    price: 3.99,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Introducing the 200g pack of Ratthi Full Cream Milk Powder—a delightful choice for those who crave the wholesome goodness of full cream milk in a convenient powdered form. Immerse yourself in the rich and creamy taste that this milk powder offers, perfect for enhancing the flavor of your beverages, desserts, and culinary creations. Experience the ease of preparation and the versatility this product brings to your kitchen, all conveniently packaged to meet your culinary needs. Indulge in the satisfying experience of Ratthi Full Cream Milk Powder and elevate your culinary creations effortlessly.",
    weight: "200g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/raththi_milk_xwb4rz.webp",
      },
    ],
  },
  {
    id: "milo_other_products",
    name: "Milo",
    price: 4.39,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Natural goodness of cocoa, milk and malt to fuel you to take on your day.Contains ACTIV-GO with PROTOMALT, vitamins and minerals for nourishing energy",
    weight: "200g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/milo_zl5n85.webp",
      },
    ],
  },
  {
    id: "pol_toffe_packets_other_products",
    name: "A traditional Sri Lankan sweet made entirely desiccated coconut and sugar",
    price: 2.89,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description: "",
    weight: "175g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/pol_toffee_nc2vze.webp",
      },
    ],
  },
  {
    id: "mixer_bite_other_products",
    name: "Mixer Bite",
    price: 3.1,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Asiri Cocktail Mixture is the one of the most Quality & delicious food product in sri Lanka",
    weight: "200g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/mixer_bite_nuwmkg.webp",
      },
    ],
  },
  {
    id: "egb_other_products",
    name: "EGB",
    price: 2.99,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Experience the timeless taste of Elephant Ginger Beer (EGB), rooted in a recipe since 1896. Bursting with the bold essence of 100% locally sourced natural ginger, our beverage complements both Eastern and Western cuisines. Elevate your meals with EGB's spicy tang and earthy notes—a culinary essential. As the famous Sri Lankan saying goes, 'No EGB, No Food.",
    weight: "250ml",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/EGB_bl7mcs.webp",
      },
    ],
  },
  {
    id: "pepper_powder_spices",
    name: "Pepper Powder",
    price: 2,
    category: {
      id: 1,
      name: "Spices",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Pepper Powder is manufactured using grade 1 pepper seeds produced in Kandy & Matale Districts to offer best quality product to our valued customers. Pepper seeds are thoroughly examined for fungal infestation and other impurities before grinding. Ppacked in laminated pouches to protect its freshness for a long period.",
    weight: "50g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/pepper_yciim5.webp",
      },
    ],
  },
  {
    id: "buriyani_mix_spices",
    name: "Buriyani Mix",
    price: 2.19,
    category: {
      id: 1,
      name: "Spices",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Biriyani Mix made with authentic herbs and spices to help you create deliciously flavourful, aromatic biriyani in your own homes in just 3 easy steps. No added MSG. No added artificial preserving ingredients. No added artificial flavours. No added artificial colours.",
    weight: "50g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/buriyani_mix_bvoxj3.webp",
      },
    ],
  },
  {
    id: "md_jam_other_products",
    name: "MD Jam",
    price: 4.99,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Savor the exquisite blend of Pineapple, Mango, Papaw, Passion Fruit, and Lime in MD Mixed Fruit Jam. This delightful creation offers a perfect balance of sweetness and tanginess, enriched with real fruit juices. Crafted with care and a touch of natural mixed fruit flavor, it's a refreshing addition to your breakfast or snack. Enjoy the pure essence of handpicked fruits in every spoonful.",
    weight: "300g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/spices/buriyani_mix_bvoxj3.webp",
      },
    ],
  },
  {
    id: "watalappam_pack_other_products",
    name: "Watalappam Pack",
    price: 3.99,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Experience the rich delight of our Watalappam Pack a ready-to-eat Sri Lankan dessert bursting with traditional flavors. Savor the perfect blend of jaggery, coconut milk, and spices in this convenient treat. Enjoy the essence of Sri Lankan sweetness with ease.",
    weight: "220g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/watalappan_pack_hvt7gr.webp",
      },
    ],
  },
  {
    id: "faluda_other_products",
    name: "Faluda",
    price: 2.39,
    category: {
      id: 4,
      name: "Other Products",
      path: "/Other_Products",
      topLevelCategory: false,
    },
    description:
      "Introducing Mortha Faluda Mix, a delightful blend of ingredients carefully packed to bring the essence of traditional faluda to your home. Simply mix our special faluda blend with vermicelli, rose syrup, sweet basil seeds, and milk to create a refreshing and indulgent faluda treat. Experience the authentic taste of Sri Lankan faluda with the convenience of Mortha Faluda Mix - a perfect companion for those craving a sweet and cooling dessert.",
    weight: "120g",
    inStock: true,
    images: [
      {
        url: "eshop-ceylon/other_products/faluda_ljmfny.webp",
      },
    ],
  },
];

export default products;
