import { faPaw } from "@fortawesome/free-solid-svg-icons";
import fundoImg from "../../assets/images/navbar/fundo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div
      className="h-96 bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${fundoImg})` }}
    >
      <div className="flex flex-col justify-center items-start max-w-5xl mx-auto h-full md:px-0">
        <h1 className="text-2xl md:text-4xl font-bold text-black mt-6 text-center md:text-left mb-4 ml-8">
          Um Pet Shop com <br /> tudo que você precisa
        </h1>
        <p className="text-base md:text-lg text-gray-700 text-center md:text-left mb-4 ml-8">
          Nosso Pet Shop é o estabelecimento Nº 1 quando se <br /> trata de
          proporcionar conforto e qualidade para você e seu Pet!
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <button className="bg-meuPreto duration-200 text-white px-6 md:px-8 py-3 rounded-md mb-4 ml-8 shadow-md flex items-center gap-2 font-semibold">
            <FontAwesomeIcon icon={faPaw} />
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
