import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import PostHeader, { ComponentProps } from 'components/blocks/PostHeader';

export default {
  title: 'Blocks/PostHeader',
  component: PostHeader,
  argTypes: {
    onTitleClick: {
      action: 'title click',
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const ReleasedTemplate: Story<ComponentProps> = (args) => {
  return <PostHeader {...args} />;
};

export const Default = ReleasedTemplate.bind({});
Default.args = {
  post: {
    id: 1,
    user_id: 1,
    category_id: 1,
    specialty_id: 1,
    release_status: 1,
    title: 'This is post title.',
    description: '',
    eye_catch_url: '',
    created_at: '2021-04-24',
    updated_at: '2021-04-24',
    likes_count: 0,
    marks_count: 0,
    user: {
      id: 1,
      name: 'Sample User',
      icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
    },
    subjects: [],
    allowedUsers: [],
  },
};
Default.storyName = 'Default';

export const IsAuthor = ReleasedTemplate.bind({});
IsAuthor.args = {
  ...Default.args,
  isAuthor: true,
};
IsAuthor.storyName = 'when user is author';

export const Saved = ReleasedTemplate.bind({});
Saved.args = {
  ...Default.args,
  editable: true,
  isSaved: true,
};
Saved.storyName = 'editing and saved and released';

export const Unsaved = ReleasedTemplate.bind({});
Unsaved.args = {
  ...Default.args,
  editable: true,
  isSaved: false,
};
Unsaved.storyName = 'editing and unsaved and released';

export const UnreleasedSaved = ReleasedTemplate.bind({});
UnreleasedSaved.args = {
  post: {
    id: 1,
    user_id: 1,
    category_id: 1,
    specialty_id: 1,
    release_status: 0,
    title: 'This is post title.',
    description: '',
    eye_catch_url: '',
    created_at: null,
    updated_at: null,
    likes_count: 0,
    marks_count: 0,
    user: {
      id: 1,
      name: 'Sample User',
      icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
    },
    subjects: [],
    allowedUsers: [],
  },
  editable: true,
  isSaved: true,
};
UnreleasedSaved.storyName = 'editing and unreleased and saved';

export const Unreleased = ReleasedTemplate.bind({});
Unreleased.args = {
  ...UnreleasedSaved.args,
  editable: true,
  isSaved: false,
};
Unreleased.storyName = 'editing and unreleased and unsaved';
