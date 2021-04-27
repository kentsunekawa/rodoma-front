import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import StatusCounter, { ComponentProps } from 'components/elements/StatusCounter';

export default {
  title: 'Elements/Others/StatusCounter',
  component: StatusCounter,
  argTypes: {
    statusType: {
      control: {
        type: 'select',
        options: ['like', 'mark'],
      },
    },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <StatusCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  statusType: 'like',
  num: 56,
};
Default.storyName = 'StatusConter';
