import { Link } from "react-router-dom";
import React from "react";
import bgPets from "../../assets/images/backgrounds/bgPets.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function FindOutMore() {
  return (
    <section id="saiba-mais" className="mt-16 mx-auto bg-meuBackground px-4 py-8">
      <div className="flex flex-wrap justify-center md:justify-center items-center gap-8 md:gap-20 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img src={bgPets} alt="bgPets" className="w-64 md:w-80 h-auto" />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="font-bold text-xl md:text-2xl">
            A maneira mais inteligente <br /> de cuidar do seu amiguinho
          </h3>
          <p className="text-sm md:text-base">
            No nosso Pet Shop, você encontra uma variedade de <br /> serviços
            para garantir a saúde e o bem-estar do seu <br /> melhor amigo.
            Agende agora seu atendimento!
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/agendamento"
              className="bg-meuPreto w-40 md:w-44 text-white font-semibold px-6 md:px-8 py-3 rounded-md flex justify-center items-center gap-2 shadow-md"
            >
              <FontAwesomeIcon icon={faPaw} />
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindOutMore;
