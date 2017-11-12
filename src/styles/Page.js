import React from 'react';
import AppFooter from 'features/layout/AppFooter';
import styled from 'react-emotion';
import {Container, Header} from 'semantic-ui-react';
import Layout, * as styles from './Layout';

const Page = Layout;

const PageHeaderWrapper = styled.div`
  ${styles.fixed};
  ${styles.floating};
  padding: 15px;
  background: #fff;
`;

Page.Header = ({children, ...rest}) => (
  <PageHeaderWrapper>
    <Container>
      <Header as="h1" {...rest}>
        {children}
      </Header>
    </Container>
  </PageHeaderWrapper>
);

Page.Content = styled.div`
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 15px;
`;

Page.HeaderActions = styled.div`
  ${styles.box};

  .ui.header & {
    .button.icon:only-child {
      display: block;
      padding: 0.78571429em;
      margin-right: 0em !important;
    }
  }
`;

Page.HeaderWithActions = ({title, children}) => (
  <Page.Flex>
    <Page.Fill>{title}</Page.Fill>
    <Page.Flex>
      <Page.HeaderActions>{children}</Page.HeaderActions>
    </Page.Flex>
  </Page.Flex>
);

Page.Basic = ({header, children}) => (
  <Page>
    <Page.Header>{header}</Page.Header>
    <Page.Fill scroll padded>
      <Container>
        {children}
        <AppFooter />
      </Container>
    </Page.Fill>
  </Page>
);

export default Page;
