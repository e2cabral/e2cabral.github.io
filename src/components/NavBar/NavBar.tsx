import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="https://e2cabral.github.io">
            Edson Cabral Junior
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://github.com/e2cabral" target="_blank" data-original-title="Follow us on Twitter">
                <i className="fa fa-github"></i>
              </a>
            </li>
            {/* <li className="nav-item"> */}
              {/* <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com" target="_blank" data-original-title="Follow us on Twitter"> */}
                {/* <i className="fa fa-twitter"></i> */}
              {/* </a> */}
            {/* </li> */}
            {/* <li className="nav-item"> */}
              {/* <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com" target="_blank" data-original-title="Like us on Facebook"> */}
                {/* <i className="fa fa-facebook-square"></i> */}
              {/* </a> */}
            {/* </li> */}
            <li className="nav-item">
              <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/odevjr/" target="_blank" data-original-title="Follow us on Instagram">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.linkedin.com/in/e2-cabral-junior/" target="_blank" data-original-title="Follow us on Instagram">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}