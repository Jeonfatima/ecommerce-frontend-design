// components/ExtraServicesSection.tsx
import ExtraServiceCard from "./ExtraServiceCard";
import { Search, Archive, Send, Shield } from "lucide-react";

function ExtraServicesSection()  {
  const services = [
    {
      title: "Source from Industry Hubs",
      image: "/images/service1.png",
      icon: <Search size={20} />,
    },
    {
      title: "Customize Your Products",
      image: "/images/service2.png",
      icon: <Archive size={20} />,
    },
    {
      title: "Fast, reliable shipping by ocean or air",
      image: "/images/service3.png",
      icon: <Send size={20} />,
    },
    {
      title: "Product monitoring and inspection",
      image: "/images/service4.png",
      icon: <Shield size={20} />,
    },
  ];

  return (
    <section className="p-6 w-[1180px] h-[256px] mx-auto mb-10">
      <h2 className="text-2xl font-semibold mb-4">Our extra services</h2>
      <div className="grid grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ExtraServiceCard
            key={index}
            title={service.title}
            image={service.image}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ExtraServicesSection;
