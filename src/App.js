import React from "react";
import Banner from './componentes/Banner';
import Noticias from './componentes/Noticias';
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

register();

function App() {
  const noticiasData = [
    {
      title: 'Estágio no Instituto de Computação (Edital nº 02/2025)',
      description: 'Processo Seletivo Simplificado para contratação de estagiário/a para o Instituto de Computação (Edital Nº 02/2025). 1 (uma) vaga para a área administrativa. Inscrições de 14 a 18 de abril de 2025.',
      imageUrl: '/imagens/InscricoesAbertasTESTE.jpeg',
    },

    {
      title: 'GUIA DO ESTUDANTE',
      description: 'Acesse o Guia do Estudante com informações sobre dicas de adaptação, mobilidade, auxílios da PROAE e serviços médicos. Aproveite ao máximo todos os recursos que a UFBA tem para te oferecer.',
      imageUrl: '/imagens/guia_do_estudante.png',
    },
    
  ];

  return (
    <div>
    <Banner />
    <div className="container mt-5">
      <div className="row">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }} 
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          
          scrollbar={{ draggable: true }}
        > 
          {noticiasData.map((news, index) => (
            <SwiperSlide key={index}>
              <Noticias
                title={news.title}
                description={news.description}
                imageUrl={news.imageUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);
}


export default App;