import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="https://demos.creative-tim.com/material-kit/index.html">
          Material Kit </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="material-icons">apps</i> Components
            </a>
            <div className="dropdown-menu dropdown-with-icons">
              <a href="./index.html" className="dropdown-item">
                <i className="material-icons">layers</i> All Components
              </a>
              <a href="https://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html" className="dropdown-item">
                <i className="material-icons">content_paste</i> Documentation
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0)">
              <i className="material-icons">cloud_download</i> Download
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.creative-tim.com/product/material-kit-pro" target="_blank">
              <i className="material-icons">unarchive</i> Upgrade to PRO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook">
              <i className="fa fa-facebook-square"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}