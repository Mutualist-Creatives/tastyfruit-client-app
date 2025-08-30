export interface ProdukData {
  id: number;
  slug: string;
  description: string;
  layoutType: "layout-a" | "layout-b";
  fruit: string;
  fruitType: {
    name: string;
    slug: string;
    image: string;
    description: string;
  }[];
  nutrition: {
    energy: string;
    totalFat: string;
    cholesterol: string;
    fiber: string;
    carbohydrates: string;
    protein: string;
    sodium: string;
    magnesium: string;
    potassium: string;
  };
  fruitCardType: "layout-a" | "layout-b";
  bgGradient?: string;
}

export const produkData: ProdukData[] = [
  {
    id: 1,
    slug: "pisang",
    description:
      "Pisang kami dibudidayakan di dataran tinggi vulkanik, menghasilkan buah dengan rasa manis yang khas dan tekstur yang lembut sempurna.",
    layoutType: "layout-a",
    fruit: "Pisang",
    fruitType: [
      {
        name: "Tasty Fruit Volcana",
        slug: "tasty-fruit-volcana",
        image: "/assets/produk/pisang/Tasty Fruit Volcana.png",
        description:
          "Pisang premium dengan rasa manis intens yang meletup di mulut, laksana letusan volkano.",
      },
      {
        name: "Tasty Fruit Pops",
        slug: "tasty-fruit-pops",
        image: "/assets/produk/pisang/Tasty Fruit Pops.png",
        description:
          "Ukuran pas untuk sekali makan, camilan sehat dan praktis untuk si kecil maupun orang dewasa.",
      },
      {
        name: "Tasty Fruit Twin",
        slug: "tasty-fruit-twin",
        image: "/assets/produk/pisang/Tasty Fruit Twin.png",
        description:
          "Dua pisang dalam satu kemasan praktis, ideal untuk berbagi energi bersama teman atau pasangan.",
      },
      {
        name: "Tasty Fruit Max",
        slug: "tasty-fruit-max",
        image: "/assets/produk/pisang/Tasty Fruit Max.png",
        description:
          "Ukuran jumbo yang padat nutrisi, memberikan energi maksimal untuk menaklukkan harimu.",
      },
    ],
    nutrition: {
      energy: "89 kcal",
      totalFat: "0.3g",
      cholesterol: "0mg",
      fiber: "2.6g",
      carbohydrates: "23g",
      protein: "1.1g",
      sodium: "1mg",
      magnesium: "27mg",
      potassium: "358mg",
    },
    fruitCardType: "layout-a",
    bgGradient: "",
  },
  {
    id: 2,
    slug: "melon",
    description:
      "Melon premium kami ditanam dengan teknik khusus dari Jepang untuk memastikan tingkat kemanisan dan aroma terbaik di setiap buahnya.",
    layoutType: "layout-b",
    fruit: "Melon",
    fruitType: [
      {
        name: "Aurora Melon",
        slug: "aurora-melon",
        image: "/assets/produk/melon/Aurora Melon.png",
        description:
          "Melon eksotis dengan daging buah berwarna oranye cerah, sangat manis, dan berair melimpah.",
      },
      {
        name: "Fujisawa Melon",
        slug: "fujisawa-melon",
        image: "/assets/produk/melon/Fujisawa Melon.png",
        description:
          "Melon kelas premium dari bibit asli Fujisawa, Jepang, dengan jaring kulit sempurna dan rasa tak tertandingi.",
      },
    ],
    nutrition: {
      energy: "34 kcal",
      totalFat: "0.2g",
      cholesterol: "0mg",
      fiber: "0.9g",
      carbohydrates: "8.2g",
      protein: "0.8g",
      sodium: "16mg",
      magnesium: "12mg",
      potassium: "267mg",
    },
    fruitCardType: "layout-b",
    bgGradient: "#B5FE28",
  },
  {
    id: 3,
    slug: "alpukat",
    description:
      "Alpukat kami dipetik saat matang sempurna, menjamin tekstur yang creamy dan rasa gurih yang kaya akan nutrisi baik.",
    layoutType: "layout-a",
    fruit: "Alpukat",
    fruitType: [
      {
        name: "Hass Avocado",
        slug: "hass-avocado",
        image: "/assets/produk/alpukat/Hass Avocado.png",
        description:
          "Alpukat Hass klasik yang terkenal dengan teksturnya yang lembut seperti mentega dan rasa gurih yang nikmat.",
      },
    ],
    nutrition: {
      energy: "160 kcal",
      totalFat: "14.7g",
      cholesterol: "0mg",
      fiber: "6.7g",
      carbohydrates: "8.5g",
      protein: "2g",
      sodium: "7mg",
      magnesium: "29mg",
      potassium: "485mg",
    },
    fruitCardType: "layout-b",
    bgGradient: "",
  },
];
