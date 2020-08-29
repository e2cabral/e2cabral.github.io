import React from 'react';

export const Main: React.FC = ({ children }) => {
  return (
    <div className="main main-raised">
      <div className="section section-basic">
        <div className="container">
          { children }
        </div>
      </div>
    </div>
  );
}