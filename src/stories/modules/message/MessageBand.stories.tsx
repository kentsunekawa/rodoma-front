import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { StyeldComponent, Props } from 'components/blocks/MessageBand';

export default {
  title: 'Blocks/Message/MessageBand',
  component: StyeldComponent,
  argTypes: {
    onClick: {
      action: 'hide message band',
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => (
  <StyeldComponent {...args}>ここにメッセージが表示されます</StyeldComponent>
);

export const Success = Template.bind({});
Success.args = {
  messageType: 'success',
};

Success.storyName = 'Success';

export const Error = Template.bind({});
Error.args = {
  messageType: 'error',
};

Error.storyName = 'Error';
