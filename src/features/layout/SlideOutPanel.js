import React from 'react';
import styled from 'react-emotion';
import Animate from 'react-move/Animate';
import types from 'prop-types';

import * as styles from 'styles/Layout';

const SlideOutWrapper = styled.div`
  ${styles.layout};
  background: rgba(0, 0, 0, ${props => props.opacity});
  z-index: 1;
  padding-left: 30%;
  overflow-x: hidden;
  align-items: flex-end;

  @media only screen and (max-width: 768px) {
    padding-left: 0%;
    overflow-y: hidden;
  }
`;

SlideOutWrapper.propTypes = {
  opacity: types.number.isRequired,
};

const SlideOutContent = styled.div`
  display: flex;
  ${styles.fill};
  ${styles.column};
  transform: translate3d(${props => props.offset}%, 0, 0);
  background-color: #fff;
  max-width: 800px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    transform: translate3d(0, ${props => props.offset}%, 0);
    margin: 10px 10px 0;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.6);
  }
`;

SlideOutContent.propTypes = {
  offset: types.number.isRequired,
};

const SlideOutPanel = ({children, duration = 250, show}) => (
  <Animate
    show={show}
    start={{
      opacity: 0,
      offset: 100,
    }}
    enter={{
      opacity: [0.5],
      offset: [0],
      timing: {duration},
    }}
    update={{
      // catch interrupts e.g. click button in middle of leave
      opacity: [0.5],
      offset: [0],
      timing: {duration},
    }}
    leave={{
      opacity: [0],
      offset: [100],
      timing: {duration},
    }}
  >
    {({opacity, offset}) => {
      return (
        <SlideOutWrapper opacity={opacity}>
          <SlideOutContent offset={offset}>{children}</SlideOutContent>
        </SlideOutWrapper>
      );
    }}
  </Animate>
);

SlideOutPanel.propTypes = {
  show: types.bool.isRequired,
  duration: types.number,
};

export default SlideOutPanel;
