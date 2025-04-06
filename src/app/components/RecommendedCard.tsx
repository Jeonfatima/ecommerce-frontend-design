import Image from "next/image";

interface CardProps {
  price: string;
  description: string;
  image: string;
}

function Card({ price, description, image }: CardProps) {
  return (
    <div className="flex flex-col gap-1 w-[220px] h-[310px] bg-white p-4 rounded shadow">
      <Image src={image} alt={description} width={200} height={200} />
      <div className="text-black font-semibold">{price}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
}

export default Card;
