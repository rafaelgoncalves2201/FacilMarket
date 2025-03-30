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
    title: "Pedreiro por empreita para repara sua casa",
    offer: "Oferta Exclusiva: 40% de Desconto",
    buttonText1: "Peça Agora",
    buttonText2: "Saiba Mais",
    imgSrc: assets.muro_pedreiro,
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Produtos e serviço em Destaque</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, imgSrc, title, offer }) => (
          <div key={id} className="group bg-white p-4 rounded-lg shadow-lg">
            {/* Imagem */}
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={title}
                width={id === 2 ? 300 : 400}
                height={id === 2 ? 200 : 300}
                className="w-full h-auto object-cover rounded-lg"
              />
            ) : (
              <p className="text-red-500">Imagem não disponível</p>
            )}

            {/* Texto abaixo da imagem */}
            <div className="mt-4 text-center">
              <p className="font-medium text-xl lg:text-2xl text-black">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60 mx-auto text-black">{offer}</p>
              <button className="mt-4 flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded text-white mx-auto">
                Compre agora{" "}
                <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;