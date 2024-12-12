import React from "react";
import MyNavBar from "../../components/NavBar/MyNavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import MeuFooter from "../../components/Footer/MyFooter";
import ContactStore from "../../components/Contact/ContactStore";
import InputForm from "../../components/Form/InputForm";

function AgendamentoPage() {
  return (
    <>
      <MyNavBar />
      <HeroSection />
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputForm />
          <ContactStore />
        </div>
      </section>
      <MeuFooter />
    </>
  );
}

export default AgendamentoPage;
