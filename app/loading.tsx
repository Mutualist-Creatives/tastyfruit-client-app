import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/layout/container";

export default function Loading() {
  return (
    <Container>
      <div className="w-full h-[60vh] flex flex-col justify-center items-center">
        <div className="space-y-4 w-full max-w-2xl px-6">
          <Skeleton className="w-full h-8 rounded-lg" />
          <Skeleton className="w-[80%] h-4 rounded" />
          <Skeleton className="w-[90%] h-4 rounded" />
          <Skeleton className="w-full h-4 rounded" />
        </div>
      </div>
    </Container>
  );
}
