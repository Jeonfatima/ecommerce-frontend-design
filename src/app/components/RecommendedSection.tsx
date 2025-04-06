import Card from "./RecommendedCard";

const products = [
  {
    price: "$10.30",
    description: "T-shirts with multiple colors, for men",
    image: "/images/1.png",
  },
  {
    price: "$10.30",
    description: "Brown winter coat for medium size",
    image: "/images/2.png",
  },
  {
    price: "$12.50",
    description: "Blazer with multiple colors, for men",
    image: "/images/3.png",
  },
  {
    price: "$34.00",
    description: "Blue wallet for men leather material",
    image: "/images/4.png",
  },
  {
    price: "$99.00",
    description: "Jeans bag for travel unisex",
    image: "/images/5.png",
  },
  {
    price: "$9.99",
    description: "Jeans short for men blue color",
    image: "/images/6.png",
  },
  {
    price: "$8.99",
    description: "Headset for gaming with mic",
    image: "/images/7.png",
  },
  {
    price: "$10.30",
    description: "Jeans bag for travel unisex",
    image: "/images/5.png",
  },
  {
    price: "$10.30",
    description: "Multipurpose red sand jar",
    image: "/images/9.png",
  },
  {
    price: "$80.95",
    description: "High quality water thermos",
    image: "/images/10.png",
  },
];

function RecommendedSection() {
  return (
    <div className="w-[1180px] mx-auto p-4">
        <div className="text-2xl font-bold mb-5">Recommended Items</div>
      <div className="grid grid-cols-5 gap-4">
      {products.map((product, index) => (
        <Card
          key={index}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
      </div>
    </div>
  );
}

export default RecommendedSection;
