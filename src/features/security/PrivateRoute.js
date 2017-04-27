/** @jsx createElement */
import {createElement} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

export const PrivateRoute = ({
  claim,
  component,
  claims = [],
  user,
  ...rest
}) => {
  const canRoute = !!claim ? claims.indexOf(claim) > -1 : !!user;

  return (
    <Route
      {...rest}
      render={props =>
        (canRoute
          ? createElement(component, props)
          : <Redirect
              to={{
                pathname: '/auth/login',
                state: {from: props.location},
              }}
            />)}
    />
  );
};

const mapStateToProps = state => {
  return {
    user: state.identity.user,
    claims: state.identity.claims,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
