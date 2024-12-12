import ProductCard from "../../components/Card/ProductCard";
import HeroSection from "../../components/HeroSection/HeroSection";
import MyNavBar from "../../components/NavBar/MyNavBar";
import racaoCachorro from "../../assets/images/produtos/ração-cachorro.png";
import FindOutMore from "../../components/FindOutMore/FindOutMore";
import BuyByPet from "../../components/BuyByPet/BuyByPet";
import MyFooter from "../../components/Footer/MyFooter";
import Ads from "../../components/Ads/Ads";
import UselessSection from "../../components/UselessSection/UselessSection";

function HomePage() {
  return (
    <>
      <MyNavBar />
      <HeroSection />
      <section id="produtos" className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4 ml-8">
          Produtos em destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <ProductCard
                key={i}
                title="Ração para cachorros"
                price="19,99"
                img={racaoCachorro}
              />
            ))}
        </div>
      </section>
      <FindOutMore />
      <UselessSection />
      <section id="produtos" className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4 ml-8">
          Produtos mais vendidos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <ProductCard
                key={i}
                title="Ração para cachorros"
                price="19,99"
                img={racaoCachorro}
              />
            ))}
        </div>
      </section>
      <BuyByPet />
      <Ads />
      <MyFooter />
    </>
  );
}

export default HomePage;
