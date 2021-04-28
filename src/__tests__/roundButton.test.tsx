import React from 'react';
// import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'components/TestWrapper';
import RoundButton, { Component } from 'components/elements/buttons/RoundButton';

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(cleanup);

describe('RoundButton', () => {
  test('RoundButton のスナップショットテスト', () => {
    const props = {
      clickFunc: jest.fn,
    };
    const tree = renderer.create(<Component {...props}>button</Component>).toJSON();
    expect(tree).toMatchSnapshot();
  });

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
