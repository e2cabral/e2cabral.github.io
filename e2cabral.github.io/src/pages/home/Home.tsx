import React from 'react';

import { NavBar } from '../../components/NavBar/NavBar';
import { Presentation } from '../../components/Presentation/Presentation';
import { Main } from '../../components/Main/Main';
import { About } from '../../components/About/About';
import { Technologies } from '../../components/Technologies/Technologies';
import { Projects } from '../../components/Projects/Projects';
import { Footer } from '../../components/Footer/Footer';

import '../../assets/css/global.css';

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Presentation />
      <Main>
        <About />
        <Technologies />
        <Projects />
      </Main>
      <Footer />
    </div>
  );
}