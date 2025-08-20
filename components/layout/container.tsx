// src/components/ui/container.tsx
interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full h-auto mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-20 font-nunito py-12">
      {children}
    </div>
  );
}
