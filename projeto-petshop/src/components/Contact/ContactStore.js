import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function ContactStore() {
  return (
    <div className="flex flex-col justify-start">
      <h2 className="text-xl font-semibold mb-6">Agende seu procedimento</h2>
      <p className="text-gray-700 mb-6">
        Entre em contato com nossa equipe para garantir o melhor cuidado para o
        seu pet. Estamos prontos para atender você e seu amiguinho com todo
        carinho e dedicação!
      </p>
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="text-meuAzul text-xl" />
          <span className="font-semibold">Rua Sebastião Bairro Cuzcuz N 60</span>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-meuAzul text-xl" />
          <span className="font-semibold">petshop@gmail.com</span>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} className="text-meuAzul text-xl" />
          <span className="font-semibold">+83 99361-3147</span>
        </li>
        <li className="flex items-center gap-4">
          <FontAwesomeIcon icon={faClock} className="text-meuAzul text-xl" />
          <span className="font-semibold">Segunda a sexta: 07:00 às 17:00</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactStore;
