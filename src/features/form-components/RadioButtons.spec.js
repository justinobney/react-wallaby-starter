import React from 'react';
import {create} from 'react-test-renderer';
import RadioButtons from './RadioButtons';

describe('Component: RadioButtons', () => {
  it('default render with selected value', () => {
    const options = [
      {value: 5, label: '5'},
      {value: 10, label: '10'},
      {value: 15, label: '15'},
    ];

    const tree = create(
      <RadioButtons
        name="test"
        options={options}
        value={5}
        onChange={Function()} // eslint-disable-line
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('default render without selected value', () => {
    const options = [
      {value: 5, label: '5'},
      {value: 10, label: '10'},
      {value: 15, label: '15'},
    ];

    const tree = create(
      <RadioButtons options={options} name="test" onChange={Function()} /> // eslint-disable-line
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('clicking an option calls the callback', () => {
    const options = [
      {value: 5, label: '5'},
      {value: 10, label: '10'},
      {value: 15, label: '15'},
    ];

    const onChange = jest.fn();

    const tree = create(
      <RadioButtons
        name="test"
        options={options}
        value={10}
        onChange={onChange}
      />
    ).toJSON();

    // div > [buttons, ...]
    tree.children[0].props.onClick();

    expect(onChange.mock.calls[0][1]).toEqual({name: 'test', value: 5});
  });
});
