import React from 'react';
import { Title } from '../Title/Title';

import ReelsWithReactImg from '../../assets/img/projeto-reels-with-react.png';

import { ReactComponent as Reactjs } from '../../assets/icons/reactjs.svg';
import { ReactComponent as Express } from '../../assets/icons/express.svg';
import { ReactComponent as Mongodb } from '../../assets/icons/mongodb.svg';
import { ReactComponent as Nodejs } from '../../assets/icons/nodejs.svg';

import './index.css';

export const Projects = () => {
  return (
    <div>
    <div className="row py-3">
      <div className="col-12 text-center">
        <Title title="Projetos" />
      </div>
      <div className="col-4">
        <img src={ReelsWithReactImg} alt="Raised Image" className="img-raised rounded img-fluid" />
      </div>
      <div className="col-6 text-left">
        <h3>
          Exemplo de Projeto
        </h3>
        <p>
        Mussum Ipsum, cacilds vidis litro abertis. 
        Posuere libero varius. Nullam a nisl ut ante 
        blandit hendrerit. Aenean sit amet nisi. 
        Atirei o pau no gatis, per gatis num morreus. 
        Tá deprimidis, eu conheço uma cachacis que 
        pode alegrar sua vidis. Paisis, filhis, 
        espiritis santis.
        </p>
        <div className="pt-2">
          <h6>Tecnologias utilizadas</h6>
          <Reactjs className="icon-project" />
          <Express className="icon-project" />
          <Mongodb className="icon-project" />
          <Nodejs className="icon-project" />
        </div>
        <div className="pt-3">
          <a href="https://e2cabral.github.io" className="btn btn-primary btn-round">
            Ver Repositório
          </a>
        </div>
      </div>
      <div className="col-2"></div>
    </div>


    {/* <div className="row py-3"> */}
      {/* <div className="col-2"></div> */}
      {/* <div className="col-6 text-right"> */}
        {/* <h3> */}
          {/* Exemplo de Projeto */}
        {/* </h3> */}
        {/* <p> */}
        {/* Mussum Ipsum, cacilds vidis litro abertis.  */}
        {/* Posuere libero varius. Nullam a nisl ut ante  */}
        {/* blandit hendrerit. Aenean sit amet nisi.  */}
        {/* Atirei o pau no gatis, per gatis num morreus.  */}
        {/* Tá deprimidis, eu conheço uma cachacis que  */}
        {/* pode alegrar sua vidis. Paisis, filhis,  */}
        {/* espiritis santis. */}
        {/* </p> */}
        {/* <div className="pt-2"> */}
          {/* <h6>Tecnologias utilizadas</h6> */}
          {/* <Reactjs className="icon-project" /> */}
          {/* <Express className="icon-project" /> */}
          {/* <Mongodb className="icon-project" /> */}
          {/* <Nodejs className="icon-project" /> */}
        {/* </div> */}
        {/* <div className="pt-3"> */}
          {/* <a href="https://e2cabral.github.io" className="btn btn-primary btn-round"> */}
            {/* Ver Repositório */}
          {/* </a> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="col-4"> */}
        {/* <img src={ProjectImg} alt="Raised Image" className="img-raised rounded img-fluid" /> */}
      {/* </div> */}
    {/* </div> */}
  </div>
  );
}