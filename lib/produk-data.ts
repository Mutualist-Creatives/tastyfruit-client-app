// The final, revised interface for your product data
export interface ProdukData {
  id: number;
  slug: string;
  description: string;
  layoutType: "layout-a" | "layout-b" | "layout-c";
  fruit: string;
  fruitType: {
    name: string; // <-- NAME ADDED HERE
    slug: string;
    image: string;
    description: string;
  }[];
  fruitCardType: "layout-a" | "layout-b" | "layout-c"; // <-- TYPE UPDATED HERE
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
        image: "/assets/produk/pisang-volcana.png",
        description:
          "Pisang premium dengan rasa manis intens yang meletup di mulut, laksana letusan volkano.",
      },
      {
        name: "Tasty Fruit Pops",
        slug: "tasty-fruit-pops",
        image: "/assets/produk/pisang-pops.png",
        description:
          "Ukuran pas untuk sekali makan, camilan sehat dan praktis untuk si kecil maupun orang dewasa.",
      },
      {
        name: "Tasty Fruit Twin",
        slug: "tasty-fruit-twin",
        image: "/assets/produk/pisang-twin.png",
        description:
          "Dua pisang dalam satu kemasan praktis, ideal untuk berbagi energi bersama teman atau pasangan.",
      },
      {
        name: "Tasty Fruit Max",
        slug: "tasty-fruit-max",
        image: "/assets/produk/pisang-max.png",
        description:
          "Ukuran jumbo yang padat nutrisi, memberikan energi maksimal untuk menaklukkan harimu.",
      },
    ],
    fruitCardType: "layout-a",
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
        image: "/assets/produk/melon-aurora.png",
        description:
          "Melon eksotis dengan daging buah berwarna oranye cerah, sangat manis, dan berair melimpah.",
      },
      {
        name: "Fujisawa Melon",
        slug: "fujisawa-melon",
        image: "/assets/produk/melon-fujisawa.png",
        description:
          "Melon kelas premium dari bibit asli Fujisawa, Jepang, dengan jaring kulit sempurna dan rasa tak tertandingi.",
      },
    ],
    fruitCardType: "layout-b",
  },
  {
    id: 3,
    slug: "alpukat",
    description:
      "Alpukat kami dipetik saat matang sempurna, menjamin tekstur yang creamy dan rasa gurih yang kaya akan nutrisi baik.",
    layoutType: "layout-c",
    fruit: "Alpukat",
    fruitType: [
      {
        name: "Hass Avocado",
        slug: "hass-avocado",
        image: "/assets/produk/alpukat-hass.png",
        description:
          "Alpukat Hass klasik yang terkenal dengan teksturnya yang lembut seperti mentega dan rasa gurih yang nikmat.",
      },
    ],
    fruitCardType: "layout-c",
  },
];
