import React from "react";

function InputForm() {
  return (
    <div className="bg-meuBackground p-5 rounded-md shadow-md">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label htmlFor="nomePet" className="text-sm font-semibold mb-2">
              Nome do pet
            </label>
            <input
              type="text"
              id="nomePet"
              placeholder="Digite o nome"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-meuAzul"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="tutor" className="text-sm font-semibold mb-2">
              Tutor
            </label>
            <input
              type="text"
              id="tutor"
              placeholder="Nome do tutor"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-meuAzul"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-meuAzul"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            placeholder="Digite seu motivo do agendamento"
            rows="4"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-meuAzul"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-meuAzul text-white py-3 rounded-md font-semibold hover:bg-blue-500 transition duration-200"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

export default InputForm;
