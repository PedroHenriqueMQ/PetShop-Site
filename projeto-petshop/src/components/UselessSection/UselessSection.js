import React from "react";
import secaoInutil from "../../assets/images/secoes/secaoInutil.png";

function UselessSection() {
  return (
    <section id="useless-section" className="flex justify-center items-center pt-12">
      <img src={secaoInutil} alt="Seção inútil"/>
    </section>
  );
}

export default UselessSection;
