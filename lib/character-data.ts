// app/lib/characterData.ts

// 1. Define the type for a single character object for type-safety
export type Character = {
  name: string;
  title: string;
  species: string;
  tabsColor: string[];
  cardColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  pictureBgColor: string;
  imageHolder: string;
  image: string;
};

// 2. Create and export the array, telling TypeScript it's an array of "Character" types
export const characterData: Character[] = [
  {
    name: "MR. TASTY",
    title: "Sukabumi",
    species: "Musa Acuminata",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    imageHolder: "/assets/tasty-universe/image-holder-green.svg",
    image: "/assets/tasty-universe/mascots/png/banana.png",
  },
  {
    name: "MISMO",
    title: "Sukabumi",
    species: "Pitahaya",
    tabsColor: ["#FF00B7", "#287041", "#003CE9", "#FFE600"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    imageHolder: "/assets/tasty-universe/image-holder-green.svg",
    image: "/assets/tasty-universe/mascots/png/mishki.png",
  },
  {
    name: "NAIN",
    title: "Meksiko",
    species: "Persea Americana",
    tabsColor: ["#308249", "#003CE9", "#FFE600"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    imageHolder: "/assets/tasty-universe/image-holder-green.svg",
    image: "/assets/tasty-universe/mascots/png/nami.png",
  },
  {
    name: "OKIN-NARI",
    title: "Jepang",
    species: "Cucumis Melo",
    tabsColor: ["#9CFF00", "#FC6C00", "#003CE9", "#FFE600"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    imageHolder: "/assets/tasty-universe/image-holder-pink.svg",
    image: "/assets/tasty-universe/mascots/png/oishi-maru.png",
  },
  {
    name: "KENO",
    title: "Asia Tenggara",
    species: "Citrus Sinensis",
    tabsColor: ["#FFE600", "#FC6C00", "#308249"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    imageHolder: "/assets/tasty-universe/image-holder-pink.svg",
    image: "/assets/tasty-universe/mascots/png/keko.png",
  },
  {
    name: "ENDES",
    title: "Meksiko & Peru",
    species: "Psidium Guajava",
    tabsColor: ["#FF00B7", "#308249", "#003CE9", "#FFE600"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    imageHolder: "/assets/tasty-universe/image-holder-pink.svg",
    image: "/assets/tasty-universe/mascots/png/endes.png",
  },
  {
    name: "MATT",
    title: "Amerika Utara",
    species: "Fragaria Ananassa",
    tabsColor: ["#EC2024", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    imageHolder: "/assets/tasty-universe/image-holder-blue.svg",
    image: "/assets/tasty-universe/mascots/png/matt.png",
  },
  {
    name: "LIZZIE",
    title: "Mediterania",
    species: "Vitis Vinifera",
    tabsColor: ["#7240A3", "#308249", "#FF00B7"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    imageHolder: "/assets/tasty-universe/image-holder-blue.svg",
    image: "/assets/tasty-universe/mascots/png/lizzie.png",
  },
  {
    name: "AROI",
    title: "Mesoamerika",
    species: "Carica Papaya",
    tabsColor: ["#FC6C00", "#308249", "#FF00B7"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    imageHolder: "/assets/tasty-universe/image-holder-blue.svg",
    image: "/assets/tasty-universe/mascots/png/aroi.png",
  },
];
