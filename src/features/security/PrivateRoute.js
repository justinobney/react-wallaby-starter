import React, {createElement} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

export const PrivateRoute = ({component, user, ...rest}) => {
  const canRoute = !!user;

  return (
    <Route
      {...rest}
      render={props =>
        canRoute ? (
          createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: {from: props.location},
            }}
          />
        )}
    />
  );
};

const mapStateToProps = state => {
  return {
    user: state.identity.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
