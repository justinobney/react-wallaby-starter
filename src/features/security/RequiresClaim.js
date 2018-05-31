import {connect} from 'react-redux';
import types from 'prop-types';

export const RequiresClaim = ({claim, claims = [], children}) => {
  if (claims.indexOf(claim) === -1) {
    return null;
  }

  return children || null;
};

RequiresClaim.propTypes = {
  claims: types.array,
  claim: types.string.isRequired,
};

const mapStateToProps = state => {
  return {
    claims: state.identity.claims,
  };
};

export default connect(mapStateToProps)(RequiresClaim);
