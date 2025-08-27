export interface ResepTastyData {
  id: number;
  image: string;
  name: string;
  servings: number;
  time: string;
  author: string;
}

export const resepTastyData: ResepTastyData[] = [
  {
    id: 1,
    image: "/assets/landing-page/what-to-cook/png/photo-1.png",
    name: "Tropical Fruit Salad",
    servings: 4,
    time: "15 minutes",
    author: "John Doe",
  },
  {
    id: 2,
    image: "/assets/landing-page/what-to-cook/png/photo-2.png",
    name: "Mango Smoothie Bowl",
    servings: 2,
    time: "10 minutes",
    author: "Jane Smith",
  },
  {
    id: 3,
    image: "/assets/landing-page/what-to-cook/png/photo-3.png",
    name: "Berry Parfait",
    servings: 6,
    time: "20 minutes",
    author: "Alex Johnson",
  },
  {
    id: 4,
    image: "/assets/landing-page/what-to-cook/png/photo-4.png",
    name: "Citrus Tart",
    servings: 8,
    time: "45 minutes",
    author: "Maria Garcia",
  },
  {
    id: 5,
    image: "/assets/landing-page/what-to-cook/png/photo-5.png",
    name: "Fruit Kebabs",
    servings: 4,
    time: "25 minutes",
    author: "Chris Lee",
  },
  {
    id: 6,
    image: "/assets/landing-page/what-to-cook/png/photo-6.png",
    name: "Dragon Fruit Bowl",
    servings: 2,
    time: "12 minutes",
    author: "Emily White",
  },
];
