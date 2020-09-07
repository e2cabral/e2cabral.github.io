import React from 'react';
import { Title } from '../Title/Title';

import ReelsWithReactImg from '../../assets/img/projeto-reels-with-react.png';
import QrCodeGeneratorImg from '../../assets/img/qr-code-generator.jpg';

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
      <div className="col-md-4 col-sm-4 col-xs-12">
        <img src={ReelsWithReactImg} alt="Raised Image" className="img-raised rounded img-fluid" />
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12 text-left">
        <h3>
          Projeto Reels Clone
        </h3>
        <p>
        O projeto foi desenvolvido com o intuito de aprofundar 
        o conhecimento em React, NodeJS e Firebase. O projeto 
        foi desenvolvido seguindo o tutorial disponibilizado 
        no YouTube pelo canal Clever Programming.
        <br />
        Um nova funcionalidade para gravação de vídeo está 
        sendo estudada para ser implementada, mas no momento 
        sem previsão de desenvolvimento.
        </p>
        <div className="pt-2">
          <h6>Tecnologias utilizadas</h6>
          <Reactjs className="icon-project" />
          <Nodejs className="icon-project" />
        </div>
        <div className="pt-3">
          <a href="https://github.com/e2cabral/reels-clone" target="_blank" className="btn btn-primary btn-round">
            Ver Repositório
          </a>
        </div>
      </div>
      <div className="col-md-2 col-sm-2 col-xs-12"></div>
    </div>


    <div className="row py-3">
      <div className="col-md-2 col-sm-2 col-xs-12"></div>
      <div className="col-md-6 col-sm-6 col-xs-12 text-right">
        <h3>
          Projeto de gerador de <strong>qr code</strong>
        </h3>
        <p>
          Projeto desenvolvido apenas como forma de estudo. O projeto consiste em um gerador de <strong>QrCode</strong> para viabilizar o uso da tecnologia. 
          A ferramenta possibilita a customização do QrCode, podendo escolher cores e principalmente o link ou texto do QrCode.
        </p>
        <div className="pt-2">
          <h6>Tecnologias utilizadas</h6>
          <Nodejs className="icon-project" />
          <Reactjs className="icon-project" />
        </div>
        <div className="pt-3">
          <a href="https://github.com/e2cabral/qr-code-generator" target="_blank" className="btn btn-primary btn-round">
            Ver Repositório
          </a>
        </div>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <img src={QrCodeGeneratorImg} alt="Raised Image" className="img-raised rounded img-fluid" />
      </div>
    </div>
  </div>
  );
}