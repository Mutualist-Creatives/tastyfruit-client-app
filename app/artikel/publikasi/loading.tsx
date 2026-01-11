import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <div className="w-full h-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-2 mb-8 relative">
          <Skeleton className="w-32 h-6 rounded px-1 py-0.5 md:px-2 mb-1" />
          <Skeleton className="w-48 h-12 md:h-16 px-2 md:px-4 py-0.5 md:py-2" />
        </div>

        {/* Articles Grid Placeholder - Matches 2 cols md:3 lg:4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="w-full aspect-[4/5] rounded-2xl" />
              <Skeleton className="w-full h-6 rounded" />
              <Skeleton className="w-2/3 h-4 rounded" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
