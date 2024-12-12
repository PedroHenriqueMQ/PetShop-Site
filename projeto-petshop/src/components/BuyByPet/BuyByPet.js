import React from "react";
import gato from "../../assets/images/pets/gato.png";
import cachorro from "../../assets/images/pets/cachorro.png";
import coelho from "../../assets/images/pets/coelho.png";
import hamster from "../../assets/images/pets/hamster.png";
import passaro from "../../assets/images/pets/ave.png";
import tartaruga from "../../assets/images/pets/tartaruga.png";

function BuyByPet() {
  const pets = [
    { name: "Gato", img: gato },
    { name: "Cachorro", img: cachorro },
    { name: "Coelho", img: coelho },
    { name: "Hamster", img: hamster },
    { name: "Pássaro", img: passaro },
    { name: "Tartaruga", img: tartaruga },
  ];

  return (
    <section id="comprar-por-pet" className="max-w-5xl mx-auto py-5">
      <div className="ml-8 mb-4">
        <h2 className="text-3xl font-bold">Comprar por pet</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center">
        {pets.map((pet, index) => (
          <div key={index} className="text-center">
            <a href={`#${pet.name.toLowerCase()}`}>
              <img
                src={pet.img}
                alt={pet.name}
                className="h-28 w-28 object-contain mx-auto"
              />
            </a>
            <h2 className="mt-2 font-semibold">{pet.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BuyByPet;
