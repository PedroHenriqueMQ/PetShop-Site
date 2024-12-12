import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import footerImage from "../../assets/images/footer/footerImage.PNG";

function MyFooter() {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-auto mt-16 flex justify-center items-center py-12 px-6"
    >
      <div className="flex flex-wrap justify-center gap-12 max-w-5xl">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <FontAwesomeIcon icon={faPaw} />
            <h2 className="font-bold">Pet Shop</h2>
          </div>
          <p>
            O melhor Pet Shop da região com os
            <br/> profissionais mais qualificados. Seu sorriso
            <br/> é nossa maior recompensa
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-xl cursor-pointer"
            />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            © Copyright Pet Shop 2024.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-bold">Empresa</h2>
          <p className="cursor-pointer">Sobre</p>
          <p className="cursor-pointer">Serviços</p>
          <p className="cursor-pointer">Filiais</p>
          <p className="cursor-pointer">Equipe</p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-bold">Links</h2>
          <p className="cursor-pointer">Novidades</p>
          <p className="cursor-pointer">Vendas</p>
          <p className="cursor-pointer">Descontos</p>
          <p className="cursor-pointer">Perguntas</p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-bold">SAC</h2>
          <p className="cursor-pointer">Contate-nos</p>
          <p className="cursor-pointer">Envio</p>
          <p className="cursor-pointer">Devoluções</p>
          <p className="cursor-pointer">Pedidos</p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-bold">Loja</h2>
          <p className="cursor-pointer">
            Rua Sebastião
            <br /> Bairro Cuzcuz N 60
          </p>
          <p className="cursor-pointer">(83) 99361-3147</p>
          <p className="cursor-pointer">petshop@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
