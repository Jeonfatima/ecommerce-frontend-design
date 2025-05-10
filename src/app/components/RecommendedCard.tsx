import Image from "next/image";
import Link from "next/link";

interface CardProps {
  price: string;
  description: string;
  image: string;
}

function Card({ price, description, image }: CardProps) {
  return (
    <div className="flex flex-col gap-1 md:w-[220px] md:h-[310px] bg-white p-4 rounded shadow">
       <Link href={'/ProductDetail'}>
      <Image src={image} alt={description} width={200} height={200} />
      </Link>
      <div className="text-black font-semibold">{price}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
}

export default Card;
