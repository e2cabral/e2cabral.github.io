import React from 'react';

interface Props {
  title: string;
}

export const Title: React.FC<Props> = (props) => {
  return (
    <div className="title">
      <h2 className="title">
        <span className="tim-note">
          { props.title }
        </span>
      </h2>
    </div>
  );
}