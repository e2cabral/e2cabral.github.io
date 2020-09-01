import React from 'react';

import './index.css';

export const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="footer" data-background-color="black">
      <div className="container">
        <nav className="float-left">
          <ul>
            <li>
              <a rel="tooltip" title="" data-placement="bottom" href="https://github.com/e2cabral" target="_blank" data-original-title="Follow us on Twitter">
                <i className="fa fa-github icon-footer"></i>
              </a>
            </li>
            {/* <li> */}
              {/* <a rel="tooltip" title="" data-placement="bottom" href="https://twitter.com" target="_blank" data-original-title="Follow us on Twitter"> */}
                {/* <i className="fa fa-twitter icon-footer"></i> */}
              {/* </a> */}
            {/* </li> */}
            {/* <li> */}
              {/* <a rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com" target="_blank" data-original-title="Like us on Facebook"> */}
                {/* <i className="fa fa-facebook-square icon-footer"></i> */}
              {/* </a> */}
            {/* </li> */}
            <li>
              <a rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/odevjr/" target="_blank" data-original-title="Follow us on Instagram">
                <i className="fa fa-instagram icon-footer"></i>
              </a>
            </li>
            <li>
              <a rel="tooltip" title="" data-placement="bottom" href="https://www.linkedin.com/in/e2-cabral-junior/" target="_blank" data-original-title="Follow us on Instagram">
                <i className="fa fa-linkedin icon-footer"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright float-right">
          <a href="https://github.com/e2cabral" target="_blank">Edson Cabral Junior</a> &copy; { year }
        </div>
      </div>
    </footer>
  );
}