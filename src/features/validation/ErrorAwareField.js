import React from 'react';
import {Form} from 'semantic-ui-react';
import styled from 'styled-components';

import {colors} from 'styles/semantic';

const ErrorList = styled.ul`color: ${colors.errorText};`;

const ErrorAwareField = ({errors = [], children, ...rest}) => {
  const showErrors = errors.length > 0;
  return (
    <Form.Field error={showErrors} {...rest}>
      {children}
      {showErrors &&
        <ErrorList>
          {errors.map(x =>
            <li key={x}>
              {x}
            </li>
          )}
        </ErrorList>}
    </Form.Field>
  );
};

export default ErrorAwareField;
