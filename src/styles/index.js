import {injectGlobal} from 'emotion';

import 'semantic-ui-css/semantic.css';
import 'toastr/build/toastr.min.css';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #efeff5;
  }

  #toast-container > div {
    opacity: 1;
  }
`;
