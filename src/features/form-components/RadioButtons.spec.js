import React from 'react';
import {render, Simulate} from 'react-testing-library';
import RadioButtons from './RadioButtons';

describe('Component: RadioButtons', () => {
  it('default render with selected value', () => {
    const options = [
      {value: 5, label: '5'},
      {value: 10, label: '10'},
      {value: 15, label: '15'},
    ];

    const {container} = render(
      <RadioButtons
        name="test"
        options={options}
        value={5}
        onChange={Function()} // eslint-disable-line
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('default render without selected value', () => {
    const options = [
      {value: 5, label: '5'},
      {value: 10, label: '10'},
      {value: 15, label: '15'},
    ];

    const {container} = render(
      <RadioButtons options={options} name="test" onChange={Function()} /> // eslint-disable-line
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('clicking an option calls the callback', () => {
    const options = [
      {value: 5, label: '5'},
      {value: 10, label: '10'},
      {value: 15, label: '15'},
    ];

    const onChange = jest.fn();

    const {getByText} = render(
      <RadioButtons
        name="test"
        options={options}
        value={10}
        onChange={onChange}
      />
    );

    Simulate.click(getByText('5'));

    expect(onChange.mock.calls[0][1]).toEqual({name: 'test', value: 5});
  });
});
