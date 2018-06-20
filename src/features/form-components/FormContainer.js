import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import styled from 'react-emotion';
import types from 'prop-types';

const DimmableWrapper = styled(Dimmer.Dimmable)`
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: #fff;
  margin-bottom: 10px;
`;

const FormContainer = ({
  children,
  loading,
  loadingMessage = 'Loading...',
  ...props
}) => {
  return (
    <DimmableWrapper dimmed={loading} {...props}>
      {children}
      <Dimmer active={loading} inverted>
        <Loader>{loadingMessage}</Loader>
      </Dimmer>
    </DimmableWrapper>
  );
};

FormContainer.propTypes = {
  children: types.node.isRequired,
  loading: types.bool,
  loadingMessage: types.string,
};

export default FormContainer;
