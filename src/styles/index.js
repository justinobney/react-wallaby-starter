import React from 'react';
import AppFooter from 'features/layout/AppFooter';
import styled, {css} from 'styled-components';
import {Container, Header} from 'semantic-ui-react';

// common styled components
export const column = css`flex-direction: column;`;
export const row = css`flex-direction: row;`;

export const floating = css`
  box-shadow: 0 4px 2px -3px grey;
  z-index: 1;
`;

export const layout = css`
  display: flex;
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${props => (props.type === 'column' ? column : row)};
`;
export const Layout = styled.div`${layout};`;

export const flex = css`
  flex: 1;
  position: relative;
  ${props => props.scroll && css`overflow-y: auto;`};
  ${props => props.padded && css`padding: 15px;`};
`;

export const Flex = styled.div`${flex};`;

export const fixed = css`
  position: relative;
  ${props => props.padded && css`padding: 15px;`};
  ${props => props.floating && floating};
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

export const BasicPage = ({header, children}) => (
  <Layout type="column">
    <PageHeader>{header}</PageHeader>
    <Flex scroll padded>
      <Container>
        {children}
        <AppFooter />
      </Container>
    </Flex>
  </Layout>
);
