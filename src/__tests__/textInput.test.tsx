import React from 'react';
import { render, fireEvent, cleanup } from 'components/TestWrapper';
import { Component } from 'components/elements/inputs/TextInput';

afterEach(cleanup);

describe('TextInput', () => {
  test('snapshot test', () => {
    const props = {
      value: 'test',
      dom: {
        input: null,
      },
      isFocus: false,
      isInputed: false,
      labelClick: jest.fn,
      onChildChange: jest.fn,
      onChildFocus: jest.fn,
    };

    const tree = render(<Component {...props}></Component>);
    expect(tree).toMatchSnapshot();
  });

  test('events ware called', () => {
    const props = {
      value: 'test',
      dom: {
        input: null,
      },
      label: 'label',
      isFocus: false,
      isInputed: false,
      labelClick: jest.fn(),
      onChildChange: jest.fn(),
      onChildFocus: jest.fn(),
      onChildBlur: jest.fn(),
    };

    const tree = render(<Component {...props} />);

    fireEvent.click(tree.getByTestId('TextInput__label'));
    expect(props.labelClick.mock.calls.length).toBe(1);

    fireEvent.focus(tree.getByTestId('TextInput__input'));
    expect(props.onChildFocus.mock.calls.length).toBe(1);

    fireEvent.change(tree.getByTestId('TextInput__input'), {
      target: { value: 'testtest' },
    });
    expect(props.onChildChange.mock.calls.length).toBe(1);

    fireEvent.blur(tree.getByTestId('TextInput__input'), { bubbles: true });
    expect(props.onChildBlur.mock.calls.length).toBe(1);
  });

  test('has class "-inputed" check', () => {
    const props = {
      value: 'test',
      dom: {
        input: null,
      },
      label: 'label',
      isFocus: true,
      isInputed: true,
      labelClick: jest.fn(),
      onChildChange: jest.fn(),
      onChildFocus: jest.fn(),
      onChildBlur: jest.fn(),
    };

    const tree = render(<Component {...props} />);

    expect(tree.getByTestId('TextInput')).toHaveClass('-inputed');
  });
});
