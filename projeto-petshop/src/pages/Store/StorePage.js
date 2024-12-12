import HeroSection from "../../components/HeroSection/HeroSection";
import MyNavBar from "../../components/NavBar/MyNavBar";
import colchao from "../../assets/images/ProdutosLoja/colchao.webp";
import coleiras from "../../assets/images/ProdutosLoja/coleiras.webp";
import tigelas from "../../assets/images/ProdutosLoja/tigelas.jpg";
import racaoCachorro from "../../assets/images/produtos/ração-cachorro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/Card/ProductCard";
import MyFooter from "../../components/Footer/MyFooter";
import pedigree from "../../assets/images/ProdutosLoja/pedigree.jpg";
import friskies from "../../assets/images/ProdutosLoja/friskies.jpg";
import removedor from "../../assets/images/ProdutosLoja/removedor.webp";
import shampoo from "../../assets/images/ProdutosLoja/shampoo.jpg";

function StorePage() {
  const popularProducts = [
    {
      image: colchao,
      title: "Colchão para cachorro",
      rating: 4,
    },
    {
      image: coleiras,
      title: "Coleiras para seu pet",
      rating: 4,
    },
    {
      image: tigelas,
      title: "Tigelas para seu pet",
      rating: 4,
    },
    {
      image: removedor,
      title: "Removedor de pelos",
      rating: 5,
    },
    {
      image: shampoo,
      title: "Shampoo para cachorro",
      rating: 5,
    },
  ];

  const storeProducts = [
    { title: "Gaiola para viagem", price: "49,90", img: racaoCachorro },
    { title: "Tigela para gato", price: "49,99", img: racaoCachorro },
    { title: "Ração Whiskas 10kg", price: "159,90", img: racaoCachorro },
    { title: "Ração Pedigree 900g", price: "44,90", img: racaoCachorro },
    { title: "Tigela para cachorro", price: "29,90", img: racaoCachorro },
    { title: "Gaiola para hamster", price: "59,90", img: racaoCachorro },
    { title: "Coleira para cachorro", price: "34,90", img: racaoCachorro },
    { title: "Cama para cachorro", price: "79,90", img: racaoCachorro },
    { title: "Bolinha de tênis", price: "19,90", img: racaoCachorro },
  ];

  return (
    <>
      <MyNavBar />
      <HeroSection />
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-wrap gap-8">
          {/* Produtos Populares */}
          <div className="w-full md:w-1/4">
            <p className="font-bold mb-4 text-xl">Produtos populares</p>
            <div className="space-y-4">
              {popularProducts.map((product, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 rounded-md shadow-sm object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm md:text-base">{product.title}</p>
                    <div className="flex gap-1 pt-2">
                      {Array(product.rating)
                        .fill(null)
                        .map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className="text-meuAmarelo"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Produtos da Loja */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {storeProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                img={product.img}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center pt-20 gap-10">
          <div>
            <img
              src={pedigree}
              alt="logo da pedigree"
              className="h-32 md:h-52 rounded-md shadow-sm"
            />
          </div>
          <div>
            <img
              src={friskies}
              alt="logo da friskies"
              className="h-32 md:h-52 rounded-md shadow-sm"
            />
          </div>
        </div>
      </section>
      <MyFooter />
    </>
  );
}

export default StorePage;
