import React from 'react';

import { Title } from '../Title/Title';

import { ReactComponent as Html } from '../../assets/icons/html.svg';
import { ReactComponent as Css } from '../../assets/icons/css.svg';
import { ReactComponent as Sass } from '../../assets/icons/sass.svg';

import { ReactComponent as Vue } from '../../assets/icons/vuejs.svg';
import { ReactComponent as Angular } from '../../assets/icons/angular.svg';
import { ReactComponent as Reactjs } from '../../assets/icons/reactjs.svg';

import { ReactComponent as Dotnet } from '../../assets/icons/dotnet.svg';
import { ReactComponent as Express } from '../../assets/icons/express.svg';
import { ReactComponent as Nodejs } from '../../assets/icons/nodejs.svg';

import { ReactComponent as Typescript } from '../../assets/icons/typescript.svg';
import { ReactComponent as Js } from '../../assets/icons/js.svg';
import { ReactComponent as Csharp } from '../../assets/icons/csharp.svg';
import { ReactComponent as Golang } from '../../assets/icons/golang.svg';

import { ReactComponent as Postgresql } from '../../assets/icons/postgresql.svg';
import { ReactComponent as Mysql } from '../../assets/icons/mysql.svg';
import { ReactComponent as Mongodb } from '../../assets/icons/mongodb.svg';

import { ReactComponent as Git } from '../../assets/icons/git.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Gitlab } from '../../assets/icons/gitlab.svg';

import { ReactComponent as Npm } from '../../assets/icons/npm.svg';
import { ReactComponent as Yarn } from '../../assets/icons/yarn.svg';

import { ReactComponent as Visualstudio } from '../../assets/icons/visualstudio.svg';
import { ReactComponent as Docker } from '../../assets/icons/docker.svg';

export const Technologies = () => {

  return (
    <div className="row py-5">
      <div className="col-12 text-center">
        <Title title="Technologies" />
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Html className="icon-svg" />
              <Css className="icon-svg" />
              <Sass className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Design</strong></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Vue className="icon-svg" />
              <Angular className="icon-svg" />
              <Reactjs className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Frontend</strong></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Dotnet className="icon-svg" />
              <Express className="icon-svg" />
              <Nodejs className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Backend</strong></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Typescript className="icon-svg" />
              <Js className="icon-svg" />
              <Csharp className="icon-svg" />
              <Golang className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Languages</strong></h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Postgresql className="icon-svg" />
              <Mysql className="icon-svg" />
              <Mongodb className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Databases</strong></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Git className="icon-svg" />
              <Github className="icon-svg" />
              <Gitlab className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Version Control</strong></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Npm className="icon-svg" />
              <Yarn className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Package Management</strong></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 py-5">
            <div className="text-center icons-container">
              <Visualstudio className="icon-svg" />
              <Docker className="icon-svg" />
            </div>
            <div className="text-center">
              <hr className="divider-icons-container" />
              <h5><strong>Tools</strong></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
