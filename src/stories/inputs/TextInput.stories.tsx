import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextInput, { ComponentProps } from 'components/elements/inputs/TextInput';

export default {
  title: 'Elements/Inputs/TextInput',
  component: TextInput,
  onChange: {
    action: 'changed',
  },
  args: {
    value: 'value',
  },
  argTypes: {
    value: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'value',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Name',
};
WithLabel.storyName = 'with Label';

export const S = Template.bind({});
S.args = {
  types: ['s'],
};
S.storyName = 'size S';

export const SWithLabel = Template.bind({});
SWithLabel.args = {
  types: ['s'],
  label: 'Name',
};
SWithLabel.storyName = 'S with Label';

export const RequiredWithLabel = Template.bind({});
RequiredWithLabel.args = {
  label: 'Name',
  required: true,
};
RequiredWithLabel.storyName = 'Required with Label';

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Sample User',
};
WithPlaceholder.storyName = 'with Placeholder';

export const TypePassword = Template.bind({});
TypePassword.args = {
  type: 'password',
  label: 'Password',
  required: true,
};
TypePassword.storyName = 'Type Password';
