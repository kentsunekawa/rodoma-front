import React from 'react';
// import { render, fireEvent, cleanup } from '@testing-library/react';
import { render, fireEvent, cleanup } from 'components/TestWrapper';
import RoundButton from 'components/elements/buttons/RoundButton';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(cleanup);

describe('RoundButton', () => {
  test('ボタンテキストが正しく表示されているか', () => {
    const tree = render(<RoundButton>button</RoundButton>);

    expect(tree.container.textContent).toBe('button');
  });

  test('click イベントの確認', () => {
    const props = {
      onClick: jest.fn,
    };
    const spyClick = jest.spyOn(props, 'onClick');

    const tree = render(<RoundButton {...props}>button</RoundButton>);

    const button = tree.container.querySelector('button');
    if (button !== null) {
      fireEvent.click(button);
    }
    expect(spyClick).toHaveBeenCalled();
  });
});
