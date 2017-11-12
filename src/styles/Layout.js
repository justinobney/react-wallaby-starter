import {css} from 'emotion';
import styled from 'react-emotion';

// common styled components
export const column = css`flex-direction: column;`;

export const row = css`flex-direction: row;`;

export const layout = props => css`
  display: flex;
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ${props.type === 'row' ? row : column};
`;

export const floating = css`
  box-shadow: 0 4px 2px -3px grey;
  z-index: 1;
`;

export const box = props => css`
  display: flex;
  align-items: ${props.align || 'center'};
  ${props.column ? column : row};
`;

export const fill = props => css`
  flex: 1;
  position: relative;
  ${props.scroll
    ? css`
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      `
    : css`
        overflow-y: hidden;
      `};
  ${props.padded && css`padding: 15px;`};
`;

export const fixed = props => css`
  position: relative;
  ${props.padded && css`padding: 15px;`};
  ${props.floating && floating};
`;

const Layout = styled.div`${layout};`;

Layout.Box = styled.div`${box};`;
Layout.Flex = styled.div`display: flex;`;
Layout.Fill = styled.div`${fill};`;
Layout.Fixed = styled.div`${fixed};`;

export default Layout;
