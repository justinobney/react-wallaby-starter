import React from 'react';
import styled from 'styled-components';

import {COMPANY_NAME} from 'constants.js';

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
    <p className="support">
      Call <a href="tel:18005518900">1-800-551-8900</a> for support.
    </p>
    <p>
      {`© ${COMPANY_NAME} ${new Date().getFullYear()}. All Rights Reserved.`}
    </p>
  </Footer>
);

export default AppFooter;
