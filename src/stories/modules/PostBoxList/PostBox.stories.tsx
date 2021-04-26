import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PostBox, { ComponentProps } from 'components/modules/PostBoxList/PostBox';

export default {
  title: 'Modules/PostBoxList/PostBox',
  component: PostBox,
  argTypes: {
    onDelete: {
      action: 'delete post box',
    },
    onRemove: {
      action: 'remove mark',
    },
  },
  args: {
    post: {
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
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <PostBox {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  onDelete: undefined,
  onRemove: undefined,
};
Default.storyName = 'Default';

export const Editable = Template.bind({});
Editable.args = {
  onDelete: undefined,
  onRemove: undefined,
  editable: true,
};
Editable.storyName = 'with edit button';

export const StatusVixitable = Template.bind({});
StatusVixitable.args = {
  onDelete: undefined,
  onRemove: undefined,
  statusVisible: true,
};
StatusVixitable.storyName = 'visible release status';

export const Deletable = Template.bind({});
Deletable.args = {
  onRemove: undefined,
};
Deletable.storyName = 'with delete button';

export const Removable = Template.bind({});
Removable.args = {
  onDelete: undefined,
};
Removable.storyName = 'with remove mark button';
