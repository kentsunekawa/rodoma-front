import React from 'react';
import { render, fireEvent, cleanup } from 'components/TestWrapper';
import RoundButton, { Component } from 'components/elements/buttons/RoundButton';

afterEach(cleanup);

describe('RoundButton', () => {
  test('snapshot test', () => {
    const props = {
      clickFunc: jest.fn,
    };
    const tree = render(<Component {...props}>button</Component>);
    expect(tree).toMatchSnapshot();
  });

  test('textcontent check', () => {
    const props = {
      clickFunc: jest.fn(),
    };
    const tree = render(<Component {...props}>button</Component>);
    expect(tree.getByTestId('RoundButton')).toHaveTextContent('button');
  });

  test('click event check', () => {
    const props = {
      onClick: jest.fn(),
    };
    const spyClick = jest.spyOn(props, 'onClick');

    const tree = render(<RoundButton {...props}>button</RoundButton>);

    fireEvent.click(tree.getByTestId('RoundButton'));
    expect(spyClick).toHaveBeenCalled();
  });

  test('disabled check', () => {
    const props = {
      onClick: jest.fn(),
      disabled: true,
    };
    const tree = render(<RoundButton {...props}>button</RoundButton>);
    expect(tree.getByTestId('RoundButton')).toHaveClass('-disabled');
  });
});
