import Image from "next/image";
import CharacterCard from "@/components/tasty-universe/character-card"; // Import the new component
import { characterData } from "@/lib/character-data"; // Assumes you move the data array to its own file

export default function TastyUniverse() {
  return (
    <section className="w-full min-h-screen font-nunito relative overflow-hidden py-20">
      <Image
        src="/assets/tasty-universe/heart.svg"
        alt=""
        aria-hidden="true"
        width={80}
        height={80}
        className="absolute bottom-[30%] left-[15%] w-20 h-20 -z-10"
      />

      <Image
        src="/assets/tasty-universe/star.svg"
        alt=""
        aria-hidden="true"
        width={60}
        height={60}
        className="absolute top-10 right-[22.5%] w-16 h-16 -z-10"
      />

      <Image
        src="/assets/tasty-universe/star.svg"
        alt=""
        aria-hidden="true"
        width={60}
        height={60}
        className="absolute bottom-5 right-1/2 left-1/2 w-12 h-12 -z-10"
      />

      {/* <Image
        src="/assets/tasty-universe/star.svg"
        alt=""
        aria-hidden="true"
        width={60}
        height={60}
        className="absolute right-0 w-12 h-12 -z-10"
      /> */}

      {/* Main content grid */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section */}

        {/* Title Image */}
        <div className="w-full lg:w-1/5 flex-shrink-0 space-y-6">
          <Image
            src="/assets/tasty-universe/tasty-universe-title.svg"
            alt="Tasty Universe Title"
            width={225}
            height={125}
            className="w-full max-w-[225px] h-auto mx-auto lg:mx-0"
            priority
          />

          {/* Description Text */}
          <div className="space-y-3 lg:space-y-4 text-[#003CE9] max-w-md mx-auto lg:mx-0">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-justify">
              Di <span className="font-bold">Tasty Universe</span>, setiap rasa
              punya wajahnya sendiri. Inilah para bintang Tasty Fruit!
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-justify">
              Maskot Tasty Fruit{" "}
              <span className="font-bold">penuh semangat</span> dan{" "}
              <span className="font-bold">karakter yang unik</span>. Mereka
              mewakili setiap gigitan segar yang menutrisi, siap membuat duniamu
              lebih berwarna dan sehat!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-4/5 space-y-8">
          {/* Meet the Pack Button */}
          <div className="flex justify-center lg:justify-end">
            <button className="group mt-0 lg:mt-3 bg-[#003CE9] hover:bg-[#002bb3] transition-colors duration-200 font-bricolage-grotesque-condensed font-extrabold text-[#B4FC28] py-1 px-3 sm:py-1 sm:px-3 text-lg sm:text-xl lg:text-2xl xl:text-4xl flex items-center gap-2 sm:gap-3 lg:gap-4 transform hover:scale-[1.02] transition-all duration-200">
              MEET THE PACK!
              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 transition-transform group-hover:translate-x-1">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {characterData.map((character, index) => (
              <CharacterCard key={index} character={character} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
