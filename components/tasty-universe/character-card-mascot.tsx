import Image from "next/image";

// Define a type for the character props for better TypeScript safety
type Character = {
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

// We pass the whole character object as a prop
export default function CharacterCardMascot({
  character,
}: {
  character: Character;
}) {
  return (
    <div
      className="w-full h-full min-h-[160px] sm:min-h-[180px] rounded-lg p-2 md:p-2.5 lg:p-2.5 transform-gpu hover:scale-[1.03] transition-transform duration-200 cursor-pointer relative overflow-hidden"
      // Using an inline style for the dynamic background color is perfect here
      style={{ backgroundColor: character.cardColor }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat z-[1]"
        style={{
          backgroundImage: "url(/assets/tasty-universe/card-pattern.svg)",
          backgroundSize: "cover",
        }}
      />
      <div className="h-full flex items-center justify-center z-10 relative">
        {/* Character Image Section - Now takes full height */}
        <div
          className="relative w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${character.imageHolder})` }}
        >
          {/* Background container with overflow visible */}
          <div
            className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-4 rounded-lg flex items-center justify-center overflow-visible"
            style={{ backgroundColor: character.pictureBgColor }}
          >
            {/* Image container that can overflow */}
            <div className="relative w-full h-full">
              <Image
                src={character.image}
                alt={`${character.name} character`}
                fill
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 18vw"
                className="object-contain drop-shadow-xl/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
