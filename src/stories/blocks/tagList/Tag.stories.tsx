import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Tag, { ComponentProps } from 'components/blocks/TagList/Tag';

export default {
  title: 'Blocks/TagList/Tag',
  component: Tag,
  argTypes: {
    types: {
      control: {
        type: 'check',
        options: ['primary', 'gradient', 'success', 'error', 'simple', 's'],
      },
    },
  },
  args: {
    value: 'ThisIsTagText',
    types: ['center'],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px', background: '#efefef', padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';

export const Simple = Template.bind({});
Simple.args = {
  types: ['simple'],
};
Simple.storyName = 'Simple';

export const Gradient = Template.bind({});
Gradient.args = {
  types: ['gradient'],
};
Gradient.storyName = 'Gradient';

export const Primary = Template.bind({});
Primary.args = {
  types: ['primary'],
};
Primary.storyName = 'Primary';

export const Success = Template.bind({});
Success.args = {
  types: ['success'],
};
Success.storyName = 'Success';

export const Error = Template.bind({});
Error.args = {
  types: ['error'],
};
Error.storyName = 'Error';

export const S = Template.bind({});
S.args = {
  types: ['s'],
};
S.storyName = 'S';

export const SetMaxTextLength = Template.bind({});
SetMaxTextLength.args = {
  maxLength: 5,
};
SetMaxTextLength.storyName = 'Set max text length';
