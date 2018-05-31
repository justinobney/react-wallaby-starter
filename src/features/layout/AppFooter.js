import React from 'react';
import styled from 'react-emotion';

import {COMPANY_NAME} from '../../constants';

const Footer = styled.footer`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 0px;
  color: #8a8a8a;

  .support {
    margin-bottom: 10px;
  }

  a {
    color: #8a8a8a;
    text-decoration: underline;
  }
`;

const AppFooter = () => (
  <Footer>
    <p>{`© ${COMPANY_NAME} ${new Date().getFullYear()}.`}</p>

    <p className="support">
      Call <a href="tel:18005518900">1-800-551-8900</a> for support.
    </p>

    <p>{process.env.REACT_APP_VERSION}</p>
  </Footer>
);

export default AppFooter;
