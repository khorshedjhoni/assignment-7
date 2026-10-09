import AllProduct from "./components/AllProdcuts/AllProduct";
import PriceDecreased from "./components/DecreasedPrice/PriceDecreased";
import HeroSection from "./components/HeroSection";
import PriceIncreased from "./components/IncreasedPrice/PriceIncreased";

export default function Home() {
  return (
   <div>
    <HeroSection></HeroSection>

    <PriceIncreased></PriceIncreased>

    <PriceDecreased></PriceDecreased>

    <AllProduct></AllProduct>
   </div>
  );
}
