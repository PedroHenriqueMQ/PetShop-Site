import React from "react";
import cachorroPao from "../../assets/images/noticias/cachorroPao.jpg";
import cachorroCheiro from "../../assets/images/noticias/cachorroCheiro.jpg";
import cachorroGato from "../../assets/images/noticias/cachorroGato.jpg";
import petLove from "../../assets/images/petlove/petlove.png";

function Ads() {
  const posts = [
    {
      image: cachorroPao,
      date: "24 de Novembro, 2024",
      logo: petLove,
      title: "Por que cachorro não pode comer pão?",
      link: "https://www.petlove.com.br/dicas/por-que-cachorro-nao-pode-comer-pao#:~:text=O%20p%C3%A3o%20%C3%A9%20produzido%20%C3%A0,fatal%20em%20alguns%20dos%20casos.",
    },
    {
      image: cachorroCheiro,
      date: "24 de Novembro, 2024",
      logo: petLove,
      title: "Cuidados com a alimentação de cães e gatos",
      link: "https://www.petlove.com.br/dicas/nutricao-de-caes-e-gatos-guia-completo?srsltid=AfmBOoqTOJ2mVJtuvDLD8sVkLD6nk83DKacPPEYjItabTU-6-LwUr4OO",
    },
    {
      image: cachorroGato,
      date: "24 de Novembro, 2024",
      logo: petLove,
      title: "Como cuidar da saúde do seu pet em cada fase da vida?",
      link: "https://www.petlove.com.br/dicas/como-cuidar-da-saude-do-seu-pet-em-cada-fase-da-vida?srsltid=AfmBOoqQ6CfVZl_xMmNJehpfo7z4sk-p9GYG4BFvxsjwPdTFMgzQeUiT",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto flex items-center flex-col px-8 py-12">
      <h2 className="text-2xl font-bold mb-4 self-start">Notícias e Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {posts.map((post, index) => (
          <div key={index} className="w-full">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-t-md cursor-pointer w-full h-40 object-cover"
              />
            </a>
            <div className="space-y-2 mt-3">
              <p className="text-gray-500">{post.date}</p>
              <img
                src={post.logo}
                alt="Logo Petlove"
                className="h-5"
              />
              <p className="font-bold text-lg">{post.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ads;
