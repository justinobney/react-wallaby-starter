import {Layout} from 'styles';
import {css} from 'emotion';
import styled from 'react-emotion';
import {lighten, textInputs} from 'polished';

export const colors = {
  black: '#1B1C1D',
  greenDark: '#36A048',
  greenLight: '#51B95D',
  tealDark: '#12ADA5',
  tealLight: '#48C2C5',
  blueDark: '#084356',
  blueLight: '#0D516C',
  errorText: '#9F3A38',
  contentBackground: '#FFF',
};

export const theme = css`
  .ui {
    &.form {
      margin-bottom: 15px;

      ${textInputs()} {
        border-width: 2px;
      }

      .dropdown,
      .selection.dropdown {
        border-width: 2px;

        .menu {
          border-width: 2px;
          margin: 0px -2px;
          min-width: calc(100% + 4px);
          width: calc(100% + 4px);
        }
      }

      .field > label {
        color: ${colors.blueDark};
      }
    }

    &.primary {
      &.buttons .button,
      &.button {
        background-color: ${colors.greenLight};

        .button:hover,
        .button:focus,
        &:hover,
        &:focus {
          background-color: ${colors.greenDark};
        }
      }
    }

    &.table {
      &.table tr th {
        border-left: none;
      }

      &.celled tr th {
        border-left: 1px solid rgba(222, 222, 222, 0.43);
      }

      thead th {
        background: ${lighten(0.2, colors.black)} -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        background: ${lighten(0.2, colors.black)} -o-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        background: ${lighten(0.2, colors.black)}
          linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        color: #fff;
      }
    }

    &.header {
      color: ${colors.blueDark};
    }

    &.container {
      @media only screen and (max-width: 767px) {
        width: auto !important;
        margin-left: 0.25em !important;
        margin-right: 0.25em !important;
      }
    }
  }
`;

const Theme = styled(Layout)`${theme};`;

export default Theme;
