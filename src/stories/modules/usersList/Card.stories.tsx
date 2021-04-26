import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import UsersList, { ComponentProps } from 'components/modules/UsersList';

export default {
  title: 'Modules/UsersList',
  component: UsersList,
  argTypes: {
    onRemove: {
      action: 'remove follow',
    },
  },
  args: {
    users: [
      {
        id: 1,
        name: 'Sample User 01',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
      {
        id: 2,
        name: 'Sample User 02',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
      {
        id: 3,
        name: 'Sample User 03',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
      {
        id: 4,
        name: 'Sample User 04',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
      {
        id: 5,
        name: 'Sample User 05',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
      {
        id: 6,
        name: 'Sample User 06',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
      {
        id: 7,
        name: 'Sample User 07',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
      {
        id: 8,
        name: 'Sample User 08',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      },
    ],
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <UsersList {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRemove: undefined,
};

export const Login = Template.bind({});
Login.args = {};
