/** @jsx createElement */
import {createElement} from 'react';
import glamorous from 'glamorous';
import {Anchor} from 'styles';

const Footer = glamorous.footer({
  textAlign: 'center',
  paddingBottom: 10,
});

const SupportBar = glamorous.p({
  marginBottom: 10,
});

const Copyright = glamorous.p({});

const AppFooter = () => (
  <Footer>
    <SupportBar>
      Call
      {' '}
      <Anchor href="tel:1-800-551-8900">1-800-551-8900</Anchor>
      {' '}
      for support.
    </SupportBar>
    <Copyright>
      {`© Elevator2, LLC ${new Date().getFullYear()}. All Rights Reserved.`}
    </Copyright>
  </Footer>
);

export default AppFooter;
