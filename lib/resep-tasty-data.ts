// Define a type for ingredients
export interface Ingredient {
  name: string;
  amount: string;
}

// Updated interface with ingredients and instructions
export interface ResepTastyData {
  id: number;
  image: string;
  name: string;
  servings: number;
  time: string;
  author: string;
  ingredients: Ingredient[];
  instructions: string[];
}

// The complete recipe data array with placeholders
export const resepTastyData: ResepTastyData[] = [
  {
    id: 1,
    image: "/assets/landing-page/what-to-cook/png/photo-1.png",
    name: "Tropical Fruit Salad",
    servings: 4,
    time: "15 minutes",
    author: "John Doe",
    ingredients: [
      { name: "Mangga", amount: "1 buah" },
      { name: "Nanas", amount: "1/2 buah" },
      { name: "Kiwi", amount: "2 buah" },
      { name: "Pepaya", amount: "1/4 buah" },
      { name: "Jeruk Nipis", amount: "1 sdm" },
    ],
    instructions: [
      "Kupas dan potong semua buah menjadi ukuran dadu.",
      "Campurkan semua potongan buah ke dalam mangkuk besar.",
      "Peras jeruk nipis di atas buah-buahan.",
      "<b>Aduk perlahan</b> hingga merata dan sajikan <i>dingin</i>.",
    ],
  },
  {
    id: 2,
    image: "/assets/landing-page/what-to-cook/png/photo-2.png",
    name: "Mango Smoothie Bowl",
    servings: 2,
    time: "10 minutes",
    author: "Jane Smith",
    ingredients: [
      { name: "Mangga beku", amount: "2 cangkir" },
      { name: "Pisang", amount: "1 buah" },
      { name: "Santan", amount: "1/2 cangkir" },
      { name: "Granola & Kelapa", amount: "Secukupnya" },
    ],
    instructions: [
      "Masukkan mangga beku, pisang, dan santan ke dalam blender.",
      "Blender dengan kecepatan tinggi hingga <i>halus dan kental</i>.",
      "Tuang ke dalam mangkuk.",
      "Hias dengan <b>granola</b>, serutan kelapa, atau topping favorit lainnya.",
    ],
  },
  {
    id: 3,
    image: "/assets/landing-page/what-to-cook/png/photo-3.png",
    name: "Berry Parfait",
    servings: 6,
    time: "20 minutes",
    author: "Alex Johnson",
    ingredients: [
      { name: "Aneka Beri", amount: "3 cangkir" },
      { name: "Yogurt Yunani", amount: "2 cangkir" },
      { name: "Granola", amount: "1 cangkir" },
      { name: "Madu", amount: "2 sdm" },
    ],
    instructions: [
      "Siapkan gelas saji.",
      "Buat lapisan pertama dengan <b>yogurt</b> di dasar gelas.",
      "Tambahkan lapisan aneka beri, lalu lapisan granola.",
      "Ulangi lapisan sampai gelas penuh dan akhiri dengan <i>tetesan madu</i> di atasnya.",
    ],
  },
  {
    id: 4,
    image: "/assets/landing-page/what-to-cook/png/photo-4.png",
    name: "Citrus Tart",
    servings: 8,
    time: "45 minutes",
    author: "Maria Garcia",
    ingredients: [
      { name: "Kulit Tart", amount: "1 buah" },
      { name: "Kuning Telur", amount: "4 butir" },
      { name: "Gula", amount: "1 cangkir" },
      { name: "Jus Lemon & Jeruk", amount: "1/2 cangkir" },
      { name: "Mentega", amount: "100 gr" },
    ],
    instructions: [
      "Panggang kulit tart terlebih dahulu hingga matang.",
      "Dalam panci, campurkan kuning telur, gula, dan jus jeruk. Masak dengan api kecil hingga <i>mengental</i>.",
      "Angkat dari api, masukkan <b>mentega</b> dan aduk hingga meleleh sempurna.",
      "Tuang isian ke dalam kulit tart dan dinginkan di kulkas minimal 2 jam.",
    ],
  },
  {
    id: 5,
    image: "/assets/landing-page/what-to-cook/png/photo-5.png",
    name: "Fruit Kebabs",
    servings: 4,
    time: "25 minutes",
    author: "Chris Lee",
    ingredients: [
      { name: "Stroberi", amount: "1 cangkir" },
      { name: "Anggur", amount: "1 cangkir" },
      { name: "Melon", amount: "1 cangkir" },
      { name: "Nanas", amount: "1 cangkir" },
      { name: "Tusuk Sate", amount: "8 buah" },
    ],
    instructions: [
      "Cuci bersih semua buah.",
      "Potong melon dan nanas menjadi <i>ukuran dadu</i>.",
      "Tusuk buah-buahan secara <b>bergantian</b> ke tusuk sate.",
      "Sajikan segera atau dinginkan terlebih dahulu.",
    ],
  },
  {
    id: 6,
    image: "/assets/landing-page/what-to-cook/png/photo-6.png",
    name: "Dragon Fruit Bowl",
    servings: 2,
    time: "12 minutes",
    author: "Emily White",
    ingredients: [
      { name: "Buah Naga Merah", amount: "1 buah" },
      { name: "Pisang Beku", amount: "1 buah" },
      { name: "Susu Almond", amount: "1/4 cangkir" },
      { name: "Biji Chia", amount: "1 sdm" },
    ],
    instructions: [
      "<i>Belah buah naga</i> menjadi dua, kerok isinya dan sisihkan kulitnya.",
      "Masukkan daging buah naga, pisang beku, dan susu almond ke dalam blender.",
      "Blender hingga <b>halus</b>.",
      "Tuang kembali ke dalam kulit buah naga dan taburi dengan biji chia.",
    ],
  },
  {
    id: 7,
    image: "/assets/resep/apple-crumble.png",
    name: "Apple Crumble Hangat",
    servings: 6,
    time: "50 minutes",
    author: "Budi Santoso",
    ingredients: [
      { name: "Apel", amount: "4 buah" },
      { name: "Tepung terigu", amount: "1 cangkir" },
      { name: "Gula palem", amount: "1/2 cangkir" },
      { name: "Mentega dingin", amount: "100 gr" },
      { name: "Kayu manis bubuk", amount: "1 sdt" },
    ],
    instructions: [
      "Panaskan oven hingga <b>180°C</b>.",
      "Kupas, buang biji, dan iris apel. Letakkan di dasar loyang dan taburi dengan kayu manis.",
      "Dalam mangkuk lain, campurkan tepung dan gula. Masukkan mentega dingin dan aduk dengan ujung jari hingga menjadi <i>adonan remah</i>.",
      "Taburkan adonan remah di atas apel secara merata.",
      "Panggang selama 30-40 menit hingga berwarna keemasan dan apel melunak.",
    ],
  },
  {
    id: 8,
    image: "/assets/resep/lemonade.png",
    name: "Lemonade Segar Klasik",
    servings: 4,
    time: "10 minutes",
    author: "Citra Lestari",
    ingredients: [
      { name: "Buah Lemon", amount: "4 buah" },
      { name: "Air dingin", amount: "1 liter" },
      { name: "Gula pasir", amount: "150 gr" },
      { name: "Daun Mint", amount: "Segenggam" },
    ],
    instructions: [
      "Peras semua lemon untuk diambil sarinya.",
      "Dalam teko besar, larutkan <b>gula pasir</b> dengan sedikit air hangat.",
      "Tambahkan sari lemon, sisa air dingin, dan daun mint. Aduk rata.",
      "<i>Sajikan dengan es batu</i> agar lebih nikmat.",
    ],
  },
];
