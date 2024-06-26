import React from 'react';
import Secao from '../../componentes/Secao';
import Cabecalho from '../../componentes/Cabecalho';
import Banner from '../../componentes/Banner';
import Rodape from '../../componentes/Rodape';


const HomePage = () => {
  const frontEndVideos = [
    // Array de vídeos fictícios
    { title: 'React para Iniciantes', thumbnail: 'link_para_imagem1' },
    { title: 'Vue vs React', thumbnail: 'link_para_imagem2' }
  ];

  const backEndVideos = [
    { title: 'Node.js do Zero', thumbnail: 'link_para_imagem3' },
    { title: 'APIs com Express', thumbnail: 'link_para_imagem4' }
  ];

  const innovationVideos = [
    { title: 'AI no Futuro', thumbnail: 'link_para_imagem5' },
    { title: 'Robótica Avançada', thumbnail: 'link_para_imagem6' }
  ];

  const managementVideos = [
    { title: 'Gestão de Projetos', thumbnail: 'link_para_imagem7' },
    { title: 'Liderança Eficaz', thumbnail: 'link_para_imagem8' }
  ];

  return (
    <>
    <Cabecalho />
    <Banner />
      <Secao title="Frontend" videos={frontEndVideos} />
      <Secao title="Backend" videos={backEndVideos} />
      <Secao title="Inovação" videos={innovationVideos} />
      <Secao title="Gestão" videos={managementVideos} />   
      <Rodape />   
    </>
  );
};

export default HomePage;
