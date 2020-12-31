import React from 'react';

import { Title } from '../Title/Title';

import './index.css';

export const About = () => {
  return (
    <div className="row">
      <div className="col-md-3 col-sm-12 col-xs-12">
        <img src="https://avatars1.githubusercontent.com/u/19250015?s=460&u=3840bc12f0e6ad5d9468be17d12e3329b1a225d5&v=4" alt="My github thumbnail" className="img-raised rounded-circle img-fluid" />
      </div>
      <div className="col-md-9 col-sm-12 col-xs-12">
        <Title title="About me" />
        <p className="f-size-24">
          I'm a <strong className="tim-note">Fullstack Developer/DevOps</strong>
          student quite curious and joining a ton of new programming languages.
          I truly love to make a bunch of thing just to test new programming
          languages, frameworks or libraries.
        </p>
        <p className="f-size-24">
          I've been building a lot of things using
          <strong className="tim-note"> Vue</strong>,
          <strong className="tim-note"> React</strong>,
          Angular, <strong className="tim-note">Typescript</strong>, Rust, Go,
          C#, .NET Core, etc. However, my main stack is Node with Typescript,
          and I'm also working with Go.
        </p>
        <p className="f-size-24">
          I'm currently working at
          <a href="https://www.iblueconsulting.com.br/" target="_blank"> iBlue Consulting </a>
           as a <strong className="tim-note">Fullstack Node Developer</strong>.
          I'm also trying to work on open-source projects, helping and learning
          from the community.
        </p>
      </div>
    </div>
  );
}
