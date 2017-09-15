import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import P from 'prop-types';

export function Func() {}

class RadioButtons extends Component {
  static propTypes = {
    name: P.string.isRequired,
    onChange: P.func.isRequired,
  };

  onClick = (e, {value}) => {
    const {name, onChange} = this.props;
    onChange(e, {name, value});
  };

  render() {
    const {value, options} = this.props;
    return (
      <Button.Group>
        {options.map(x => (
          <Button
            type="button"
            key={x.label}
            active={x.value === value}
            onClick={e => this.onClick(e, x)}
          >
            {x.label}
          </Button>
        ))}
      </Button.Group>
    );
  }
}

export default RadioButtons;
