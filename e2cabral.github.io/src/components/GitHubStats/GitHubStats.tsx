import React from 'react';

import { Title } from '../Title/Title';

// import './index.css';

export const GitHubStats = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-sm-12 col-xl-12">
        <Title title="GitHub Stats" />
      </div>
      <div className="col-sm-12 col-md-6 col-sm-6 col-xl-6">
        <img
          alt="These are my GitHub's stats"
          src="https://github-readme-stats.vercel.app/api?username=e2cabral&show_icons=true&count_private=true&hide=issues&bg_color=151515&text_color=6C6C6C&title_color=E24329" />
      </div>
      <div className="col-sm-12 col-md-6 col-sm-6 col-xl-6">
        <img
          alt="My GitHub Stats, click it to see my personal web site"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=e2cabral&layout=compact&bg_color=151515&text_color=6C6C6C&title_color=E24329" />
      </div>
    </div>
  );
}
