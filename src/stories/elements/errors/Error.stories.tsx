import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Error, { ComponentProps } from 'components/elements/Error';
import TextInput from 'components/elements/inputs/TextInput';
import * as TextInputStories from 'stories/elements/inputs/TextInput.stories';

export default {
  title: 'Elements/Errors/Validation Error',
  component: Error,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => (
  <Error {...args}>
    <TextInput value="Invalid Value" {...TextInputStories.WithLabel.args} />
  </Error>
);

export const ValidationError = Template.bind({});
ValidationError.args = {
  messages: ['バリデーションエラーメッセージ'],
};

ValidationError.storyName = 'Validation Error';
