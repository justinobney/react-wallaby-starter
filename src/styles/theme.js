import {Layout} from 'styles';
import styled, {css} from 'styled-components';

export const colors = {
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

      input:not([type]),
      input[type='date'],
      input[type='datetime-local'],
      input[type='email'],
      input[type='number'],
      input[type='password'],
      input[type='search'],
      input[type='tel'],
      input[type='time'],
      input[type='text'],
      input[type='file'],
      input[type='url'] {
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

      .react-tagsinput-tag {
        padding: 3px;
      }

      .react-tagsinput {
        border: 2px solid rgba(34, 36, 38, 0.15);
        border-radius: 0.285714rem;
      }

      .react-tagsinput--focused {
        border-color: #85b7d9;
      }

      input.react-tagsinput-input {
        background: transparent;
        border: 0;
        color: #777;
        font-family: sans-serif;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 6px;
        margin-top: 1px;
        outline: none;
        padding: 5px;
        width: 80px;
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
        background: ${colors.blueDark} -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        background: ${colors.blueDark} -o-linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        background: ${colors.blueDark}
          linear-gradient(transparent, rgba(0, 0, 0, 0.05));
        color: #fff;
      }
    }

    &.header {
      color: ${colors.blueDark};
    }
  }
`;

const Theme = styled(Layout)`${theme};`;

export default Theme;
