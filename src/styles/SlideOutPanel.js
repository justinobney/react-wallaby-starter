import React from 'react';
import styled from 'react-emotion';
import {Motion, spring} from 'react-motion';

import {column, fill, layout} from '.';

const SlideOutWrapper = styled.div`
  ${layout};
  background: rgba(0, 0, 0, 0.49);
  z-index: 1;
  padding-left: 30%;
  overflow-x: hidden;
  align-items: flex-end;
`;

const SlideOutContent = styled.div`
  display: flex;
  ${fill};
  ${column};
  transform: translate3d(${props => props.x}%, 0, 0);
  background-color: #fff;
  max-width: 800px;
`;

export const SlideOutPanel = ({children}) => (
  <SlideOutWrapper>
    <Motion defaultStyle={{x: 100}} style={{x: spring(0)}}>
      {({x}) => <SlideOutContent x={x}>{children}</SlideOutContent>}
    </Motion>
  </SlideOutWrapper>
);
