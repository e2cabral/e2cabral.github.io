import React from 'react';

import { Title } from '../Title/Title';

export const About = () => {
  return (
    <div className="row">
      <div className="col-3">
        <img src="https://avatars1.githubusercontent.com/u/19250015?s=460&u=3840bc12f0e6ad5d9468be17d12e3329b1a225d5&v=4" alt="Circle Image" className="img-raised rounded-circle img-fluid" />
      </div>
      <div className="col-9">
        <Title title="Sobre mim" />
        <h4>
          Desenvolvedor Full Stack Node,
          <strong className="tim-note"> apaixonado</strong> por planejar, escrever 
          e entregar <strong className="tim-note">experiências incríveis </strong>
          em formato de software. Proficiente 
          no desenvolvimento de satisfação e 
          adição de valor.
        </h4>
      </div>
    </div>
  );
}