
import Hero from "./components/Hero"
import DiscountSection from "./components/DiscountSection";
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import RequestSection from "./components/RequestSection";
import RecommendedSection from "./components/RecommendedSection";
import ExtraServicesSection from "./components/ExtraServiceSection";
import Suppliers from "./components/Suppliers";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className=" w-full max-w-[1440px] mx-auto bg-[#f7fafc]" >
       <Navbar/>
      <Hero/>
      <DiscountSection/>
      <FirstSection/>
      <SecondSection/>
      <RequestSection/>
      <RecommendedSection/>
      <ExtraServicesSection/>
      <Suppliers/> 
      
      
    </div>
  );
}
