import React, {createElement} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import types from 'prop-types';

export const PrivateRoute = ({component, render, user, ...rest}) => {
  const canRoute = !!user;

  return (
    <Route
      {...rest}
      render={props =>
        canRoute ? (
          component ? (
            createElement(component, props)
          ) : (
            render(props)
          )
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: {from: props.location},
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  user: types.object,
};

const mapStateToProps = state => {
  return {
    user: state.identity.user,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
