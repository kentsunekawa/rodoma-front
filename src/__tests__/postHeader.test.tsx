import React from 'react';
import { render, fireEvent, cleanup, getByTestId } from 'components/TestWrapper';
import { PostData } from 'types';
import { Component } from 'components/blocks/PostHeader';

const mockPostData: PostData = {
  id: 1,
  user_id: 1,
  category_id: 1,
  specialty_id: 1,
  release_status: 0,
  title: 'post title',
  description: 'post description',
  eye_catch_url: 'http://img.rodoma.net/testtest',
  created_at: '2021-01-01',
  updated_at: '2021-01-01',
  likes_count: 0,
  marks_count: 0,
  user: {
    id: 1,
    name: 'test user',
    icon_url: '',
  },
  subjects: [],
  allowedUsers: [],
};

const mockBaseProps = {
  post: mockPostData,
  tabTextList: ['category01', 'specialty01'],
  postStatusList: [
    {
      types: [],
      value: 'status01',
    },
  ],
};

afterEach(cleanup);

describe('PostHeader', () => {
  test('snapshot test', () => {
    const tree = render(<Component {...mockBaseProps} />);
    expect(tree).toMatchSnapshot();
  });

  test('event was called', () => {
    const props = { ...mockBaseProps, onTitleClick: jest.fn() };
    const tree = render(<Component {...props} />);
    fireEvent.click(tree.getByTestId('PostHeader__title'));
    expect(props.onTitleClick.mock.calls.length).toBe(1);
  });

  test('status check saved unreleased', () => {
    const tree = render(
      <Component
        {...{
          ...mockBaseProps,
          isSaved: true,
          editable: true,
          postStatusList: [
            {
              types: ['success'],
              value: '保存済',
            },
            {
              types: [],
              value: '未公開',
            },
          ],
        }}
      />
    );

    const tags = tree.container.querySelectorAll('.PostEditStatus .Tag');

    const tag01 = tags[0];
    expect(tag01.querySelector('.text')).toHaveTextContent('保存済');

    const tag02 = tags[1];
    expect(tag02.querySelector('.text')).toHaveTextContent('未公開');
  });

  test('status check when author', () => {
    const tree = render(
      <Component
        {...{
          ...mockBaseProps,
          isAuthor: true,
        }}
      />
    );

    const editButton = tree.container.querySelector('.linkToEdit') as HTMLButtonElement;
    expect(tree.container).toContainElement(editButton);
  });
});
