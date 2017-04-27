import {connect} from 'react-redux';

export const RequiresClaim = ({claim, claims = [], user, render}) => {
  if (!user || claims.indexOf(claim) === -1) {
    return null;
  }

  return render();
};

const mapStateToProps = state => {
  return {
    user: state.identity.user,
    claims: state.identity.claims,
  };
};

export default connect(mapStateToProps)(RequiresClaim);
