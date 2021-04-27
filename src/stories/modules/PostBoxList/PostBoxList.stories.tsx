import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import PostBoxList, { ComponentProps } from 'components/modules/PostBoxList';

export default {
  title: 'Modules/PostBoxList',
  component: PostBoxList,
  args: {
    posts: [
      {
        id: 0,
        title: 'This is post title',
        release_status: 1,
        category_id: 1,
        specialty_id: 1,
        likes_count: 10,
        marks_count: 10,
        eye_catch_url: 'https://img.rodoma.net/img/post/eye_catch/default.jpg',
        user: {
          id: 1,
          name: 'Sample User',
          icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
        },
      },
      {
        id: 0,
        title: 'This is post title',
        release_status: 1,
        category_id: 1,
        specialty_id: 1,
        likes_count: 10,
        marks_count: 10,
        eye_catch_url: 'https://img.rodoma.net/img/post/eye_catch/default.jpg',
        user: {
          id: 1,
          name: 'Sample User',
          icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
        },
      },
      {
        id: 0,
        title: 'This is post title',
        release_status: 1,
        category_id: 1,
        specialty_id: 1,
        likes_count: 10,
        marks_count: 10,
        eye_catch_url: 'https://img.rodoma.net/img/post/eye_catch/default.jpg',
        user: {
          id: 1,
          name: 'Sample User',
          icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
        },
      },
      {
        id: 0,
        title: 'This is post title',
        release_status: 2,
        category_id: 1,
        specialty_id: 1,
        likes_count: 10,
        marks_count: 10,
        eye_catch_url: 'https://img.rodoma.net/img/post/eye_catch/default.jpg',
        user: {
          id: 1,
          name: 'Sample User',
          icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
        },
      },
      {
        id: 0,
        title: 'This is post title',
        release_status: 0,
        category_id: 1,
        specialty_id: 1,
        likes_count: 10,
        marks_count: 10,
        eye_catch_url: 'https://img.rodoma.net/img/post/eye_catch/default.jpg',
        user: {
          id: 1,
          name: 'Sample User',
          icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
        },
      },
    ],
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  return (
    <div>
      <PostBoxList {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Dafault';

export const Editable = Template.bind({});
Editable.args = {
  editable: true,
};
Editable.storyName = 'with edit button';

export const StatusVisible = Template.bind({});
StatusVisible.args = {
  statusVisible: true,
};
StatusVisible.storyName = 'visible release status';
