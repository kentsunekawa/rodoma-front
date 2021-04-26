import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import UserIcon, { ComponentProps } from 'components/elements/UserIcon';

export default {
  title: 'Elements/UserIcon',
  component: UserIcon,
  decorators: [
    (Story) => (
      <div style={{ width: '100px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <UserIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
Default.storyName = 'Only Icon';
