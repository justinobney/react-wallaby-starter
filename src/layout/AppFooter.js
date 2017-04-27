/** @jsx createElement */
import {createElement} from 'react';
import './footer.scss';

const AppFooter = () => (
  <div id="footer-container">
    <footer id="site-footer">
      <div id="support-bar">
        <p className="text-center" id="call">
          Call <a href="tel:1-800-551-8900">1-800-551-8900</a> for support.
        </p>
      </div>
      <div className="ui container">
        <div id="footer-content">
          <p className="text-center">
            <a href="http://justinobney.com">
              {/* <img
                id="company-logo"
                src={require('../img/logo-print.png')}
                alt={COMPANY_NAME}
              /> */}
            </a>
          </p>
          <p className="text-center">
            {`© Elevator2, LLC ${new Date().getFullYear()}. All Rights Reserved.`}
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default AppFooter;
