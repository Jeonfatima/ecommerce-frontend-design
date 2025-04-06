
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Hero from "./components/Hero"
import DiscountSection from "./components/DiscountSection";
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import RequestSection from "./components/RequestSection";
import RecommendedSection from "./components/RecommendedSection";
import ExtraServicesSection from "./components/ExtraServiceSection";
import Suppliers from "./components/Suppliers";
export default function Home() {
  return (
    <div className=" max-w-[1440px] h-screen mx-auto bg-[#f7fafc]" >
      <Header/>
      <Navbar/>
      <Hero/>
      <DiscountSection/>
      <FirstSection/>
      <SecondSection/>
      <RequestSection/>
      <RecommendedSection/>
      <ExtraServicesSection/>
      <Suppliers/>
      
      <Newsletter/>
      <Footer/>
    </div>
  );
}
