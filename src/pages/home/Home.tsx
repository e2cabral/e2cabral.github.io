import React from 'react';

import { NavBar } from '../../components/NavBar/NavBar';
import { Presentation } from '../../components/Presentation/Presentation';

import '../../assets/css/global.css';

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Presentation />
    </div>
  );
}