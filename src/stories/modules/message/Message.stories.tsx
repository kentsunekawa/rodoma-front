import React from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from 'state/modules/app';

import { Story, Meta } from '@storybook/react/types-6-0';
import Message, { ComponentProps } from 'components/modules/Message';
import * as StyledElement from 'stories/StyledElements';

export default {
  title: 'Blocks/Message',
  component: Message,
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

const Template: Story<ComponentProps> = (args) => {
  const dispatch = useDispatch();
  const success = () => {
    dispatch(
      setMessage({
        isShow: true,
        type: 'success',
        message: 'ここにメッセージが表示されます',
      })
    );
  };

  const error = () => {
    dispatch(
      setMessage({
        isShow: true,
        type: 'error',
        message: 'ここにメッセージが表示されます',
      })
    );
  };
  return (
    <div>
      <StyledElement.SampleButton onClick={success}>
        Success message show!
      </StyledElement.SampleButton>
      <StyledElement.SampleButton onClick={error}>Error message show!</StyledElement.SampleButton>
      <Message {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

Default.storyName = 'Default';
