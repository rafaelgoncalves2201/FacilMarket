import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Experimente o Som Puro - Seus Fones de Ouvido Perfeitos Esperam por Você!",
    offer: "Oferta por Tempo Limitado: 30% de Desconto",
    buttonText1: "Comprar Agora",
    buttonText2: "Saber Mais",
    imgSrc: assets.header_headphone_image,
  },
  {
    id: 2,
    title: "O Jogo de Outro Nível Começa Aqui - Descubra o PlayStation 5 Hoje!",
    offer: "Corra, só restam poucos!",
    buttonText1: "Compre Agora",
    buttonText2: "Explorar Ofertas",
    imgSrc: assets.header_playstation_image,
  },
  {
    id: 3,
    title: "Poder Encontra Elegância - O Apple MacBook Pro Está Aqui Para Você!",
    offer: "Oferta Exclusiva: 40% de Desconto",
    buttonText1: "Peça Agora",
    buttonText2: "Saiba Mais",
    imgSrc: assets.header_macbook_image,
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Produtos em Destaque</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                Compre agora <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
