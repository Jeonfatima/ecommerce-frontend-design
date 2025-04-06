// components/ExtraServiceCard.tsx
import Image from "next/image";
import { ReactNode } from "react";

interface ExtraServiceCardProps {
  title: string;
  image: string;
  icon: ReactNode;
}

const ExtraServiceCard: React.FC<ExtraServiceCardProps> = ({ title, image, icon }) => {
  return (
    <div className="relative w-64 rounded-md overflow-hidden shadow bg-white">
      {/* Image Section */}
      <div className="h-36 w-full relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Title Section */}
      <div className="p-3 text-sm font-medium text-gray-800">{title}</div>

      {/* Icon in bottom-right */}
      <div className="absolute bottom-3 right-3 bg-blue-100 p-2 rounded-full">
        {icon}
      </div>
    </div>
  );
};

export default ExtraServiceCard;
