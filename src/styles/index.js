import React from 'react';
import AppFooter from 'features/layout/AppFooter';
import {css} from 'emotion';
import styled from 'react-emotion';
import {Container, Header} from 'semantic-ui-react';

// common styled components
export const column = css`flex-direction: column;`;
export const row = css`flex-direction: row;`;

export const floating = css`
  box-shadow: 0 4px 2px -3px grey;
  z-index: 1;
`;

export const box = props => css`
  display: flex;
  align-items: ${props.align || 'center'};
  ${props.column ? column : row};
`;

export const Box = styled.div`${box};`;

export const layout = props => css`
  display: flex;
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${props.type === 'column' ? column : row};
`;
export const Layout = styled.div`${layout};`;

export const Flex = styled.div`display: flex;`;

export const fill = props => css`
  flex: 1;
  position: relative;
  ${props.scroll &&
    css`
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    `};
  ${props.padded && css`padding: 15px;`};
`;

export const Fill = styled.div`${fill};`;

export const fixed = props => css`
  position: relative;
  ${props.padded && css`padding: 15px;`};
  ${props.floating && floating};
`;

export const Fixed = styled.div`${fixed};`;

const PageHeaderWrapper = styled.div`
  ${fixed};
  ${floating};
  padding: 15px;
  background: #fff;
`;

export const PageHeader = ({children, ...rest}) => (
  <PageHeaderWrapper>
    <Container>
      <Header as="h1" {...rest}>
        {children}
      </Header>
    </Container>
  </PageHeaderWrapper>
);

export const PageContent = styled.div`
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 15px;
`;

export const HeaderActions = styled.div`
  ${box};

  .ui.header & {
    .button.icon:only-child {
      display: block;
      padding: 0.78571429em;
      margin-right: 0em !important;
    }
  }
`;

export const HeaderWithActions = ({title, children}) => (
  <Flex>
    <Fill>{title}</Fill>
    <Flex>
      <HeaderActions>{children}</HeaderActions>
    </Flex>
  </Flex>
);

export const BasicPage = ({header, children}) => (
  <Layout type="column">
    <PageHeader>{header}</PageHeader>
    <Fill scroll padded>
      <Container>
        {children}
        <AppFooter />
      </Container>
    </Fill>
  </Layout>
);
