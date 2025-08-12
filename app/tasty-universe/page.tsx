import Image from "next/image";

const characterData = [
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
    image: "/assets/tasty-universe/mr-tasty.png",
  },
  {
    name: "MISMO",
    title: "Sukabumi",
    species: "Pitahaya",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    image: "/assets/tasty-universe/mismo.png",
  },
  {
    name: "NAIN",
    title: "Meksiko",
    species: "Persea Americana",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#003CE9",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#9CFF00",
    pictureBgColor: "#FF00B7",
    image: "/assets/tasty-universe/nain.png",
  },
  {
    name: "OKIN-NARI",
    title: "Jepang",
    species: "Cucumis Melo",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    image: "/assets/tasty-universe/okin-nari.png",
  },
  {
    name: "KENO",
    title: "Asia Tenggara",
    species: "Citrus Sinensis",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    image: "/assets/tasty-universe/keno.png",
  },
  {
    name: "ENDES",
    title: "Meksiko & Peru",
    species: "Psidium Guajava",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#9CFF00",
    primaryColor: "#003CE9",
    secondaryColor: "#9CFF00",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#003CE9",
    image: "/assets/tasty-universe/endes.png",
  },
  {
    name: "MATTY",
    title: "Amerika Utara",
    species: "Fragaria Ananassa",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    image: "/assets/tasty-universe/matty.png",
  },
  {
    name: "LIZZIE",
    title: "Mediterania",
    species: "Vitis Vinifera",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    image: "/assets/tasty-universe/lizzie.png",
  },
  {
    name: "ARDI",
    title: "Mesoamerika",
    species: "Carica Papaya",
    tabsColor: ["#FFE600", "#FC6C00", "#308249", "#003CE9"],
    cardColor: "#00C563",
    primaryColor: "#9CFF00",
    secondaryColor: "#003CE9",
    tertiaryColor: "#003CE9",
    pictureBgColor: "#9CFF00",
    image: "/assets/tasty-universe/ardi.png",
  },
];

export default function TastyUniverse() {
  return (
    <section className="w-full min-h-screen text-white font-nunito">
      <div className="mx-auto py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-12">
            {/* Left Section - Title and Description */}
            <div className="w-1/5 flex-shrink-0 space-y-6">
              {/* Title Image */}
              <div className="w-full">
                <Image
                  src="/assets/tasty-universe/tasty-universe-title.svg"
                  alt="Tasty Universe Title"
                  width={225}
                  height={125}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Description Text */}
              <div className="space-y-4 text-[#003CE9] max-w-md lg:max-w-none">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                  Di <span className="font-bold">Tasty Universe</span>, setiap
                  rasa punya wajahnya sendiri. Inilah para bintang Tasty Fruit!
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                  Maskot Tasty Fruit{" "}
                  <span className="font-bold">penuh semangat</span> dan{" "}
                  <span className="font-bold">karakter yang unik</span>. Mereka
                  mewakili setiap gigitan segar yang menutrisi, siap membuat
                  duniamu lebih berwarna dan sehat!
                </p>
              </div>
            </div>

            {/* Right Section - Button and Character Grid */}
            <div className="w-4/5 flex-shrink-0 space-y-8">
              {/* Meet the Pack Button */}
              <div className="flex justify-start lg:justify-end">
                <button className="group mt-3 bg-[#003CE9] hover:bg-[#002bb3] transition-colors duration-200 font-bricolage-grotesque-condensed font-extrabold text-[#B4FC28] py-1 px-3 sm:py-1 sm:px-3 text-xl sm:text-2xl lg:text-4xl flex items-center gap-3 sm:gap-4 transform hover:scale-[1.02] transition-all duration-200">
                  MEET THE PACK!
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform group-hover:translate-x-1">
                    <Image
                      src="/assets/tasty-universe/arrow-right.svg"
                      alt="Arrow Right"
                      width={28}
                      height={28}
                      className="w-full h-full"
                    />
                  </div>
                </button>
              </div>

              {/* Character Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {characterData.map((character, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] p-4 transform hover:scale-[1.02] transition-all duration-200 cursor-pointer relative overflow-hidden"
                    style={{ backgroundColor: character.cardColor }}
                  >
                    {/* Background Pattern */}
                    <div
                      className="absolute inset-0 rounded-[20px] opacity-20"
                      style={{
                        backgroundImage:
                          "url(/assets/tasty-universe/card-pattern.svg)",
                        backgroundSize: "",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="flex w-full h-auto justify-between items-center">
                      {/* Top Color Tabs */}
                      <div className="w-1/2">
                        {/* Note: `gap-1` was removed from this div to create a continuous bar */}
                        <div className="flex w-full mb-4 relative z-10">
                          {character.tabsColor.map((color, tabIndex) => (
                            <div
                              key={tabIndex}
                              className={`h-3 flex-1 ${
                                tabIndex === 0 ? "rounded-tl-lg" : ""
                              } ${
                                tabIndex === character.tabsColor.length - 1
                                  ? "rounded-tr-lg"
                                  : ""
                              }`}
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1"></div>
                    </div>

                    <div className="flex items-start justify-between relative z-10">
                      {/* Left Content */}
                      <div
                        className={`flex-1 space-y-2 text-[${character.tertiaryColor}]`}
                      >
                        {/* Name Section */}
                        <div className="space-y-1">
                          <p className="text-[8pt] font-medium">Nama</p>
                          <div
                            className="inline-block font-bold text-xs sm:text-xl uppercase px-1 font-bricolage-grotesque-condensed"
                            style={{
                              backgroundColor: character.primaryColor,
                              color: character.secondaryColor,
                            }}
                          >
                            {character.name}
                          </div>
                        </div>

                        {/* Location Section */}
                        <div className="space-y-1">
                          <p className="text-[8pt] font-medium">
                            Tempat Tumbuh
                          </p>
                          <div
                            className="inline-block font-bold text-xs sm:text-xl uppercase px-1 font-bricolage-grotesque-condensed"
                            style={{
                              backgroundColor: character.primaryColor,
                              color: character.secondaryColor,
                            }}
                          >
                            {character.title}
                          </div>
                        </div>

                        {/* Species Section */}
                        <div className="space-y-1">
                          <p className="text-[8pt] font-medium">Spesies</p>
                          <div
                            className="inline-block font-bold text-xs sm:text-xl uppercase px-1 font-bricolage-grotesque-condensed"
                            style={{
                              backgroundColor: character.primaryColor,
                              color: character.secondaryColor,
                            }}
                          >
                            {character.species}
                          </div>
                        </div>
                      </div>

                      {/* Character Image with decorative border */}
                      <div className="ml-4 relative">
                        <div
                          className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center relative overflow-hidden"
                          style={{ backgroundColor: character.pictureBgColor }}
                        >
                          {/* Decorative scalloped border using pseudo-elements */}
                          <div className="absolute inset-1"></div>
                          <Image
                            src={character.image}
                            alt={`${character.name} character`}
                            width={64}
                            height={64}
                            className="w-12 h-12 sm:w-16 sm:h-16 object-contain relative z-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
