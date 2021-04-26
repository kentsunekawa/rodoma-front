import React, { useState } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import UserSearch, { ComponentProps } from 'components/blocks/UserSearch';

export default {
  title: 'Blocks/UserSearch',
  component: UserSearch,
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
  args: {
    users: [
      {
        id: 1,
        name: 'Steve Jobs',
        icon_url: '',
      },
      {
        id: 2,
        name: 'Elon Musk',
        icon_url: '',
      },
      {
        id: 3,
        name: 'Warren Edward Buffet',
        icon_url: '',
      },
      {
        id: 4,
        name: 'Mark Elliot Zuckerberg',
        icon_url: '',
      },
      {
        id: 5,
        name: 'Lawrence Edward "Larry" Page',
        icon_url: '',
      },
      {
        id: 6,
        name: 'William Henry "Bill" Gates III',
        icon_url: '',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const onChange = (selectedUsers: any) => {
    setSelectedUsers(selectedUsers);
  };

  return <UserSearch {...{ ...args, selectedUsers, onChange }} />;
};

export const Default = Template.bind({});
Default.args = {};
