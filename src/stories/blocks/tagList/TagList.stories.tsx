import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import TagList, { ComponentProps } from 'components/blocks/TagList';

export default {
  title: 'Blocks/TagList',
  component: TagList,
  argTypes: {
    tagTypes: {
      control: {
        type: 'check',
        options: ['primary', 'gradient', 'success', 'error', 'simple', 's'],
      },
    },
    types: {
      control: {
        type: 'check',
        options: ['center', 'alignLeft', 'alignRight'],
      },
    },
    onChange: {
      action: 'change',
    },
  },
  args: {
    values: ['This is tab text 01', 'This is tab text 02'],
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

const Template: Story<ComponentProps> = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';

export const Simple = Template.bind({});
Simple.args = {
  tagTypes: ['simple'],
};
Simple.storyName = 'Simple';

export const Gradient = Template.bind({});
Gradient.args = {
  tagTypes: ['gradient'],
};
Gradient.storyName = 'Gradient';

export const Primary = Template.bind({});
Primary.args = {
  tagTypes: ['primary'],
};
Primary.storyName = 'Primary';

export const Success = Template.bind({});
Success.args = {
  tagTypes: ['success'],
};
Success.storyName = 'Success';

export const Error = Template.bind({});
Error.args = {
  tagTypes: ['error'],
};
Error.storyName = 'Error';

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  types: ['center'],
};
AlignCenter.storyName = 'Align Center';

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  types: ['alignLeft'],
};
AlignLeft.storyName = 'Align Left';

export const AlignRight = Template.bind({});
AlignRight.args = {
  types: ['alignRight'],
};
AlignRight.storyName = 'Align Right';

export const S = Template.bind({});
S.args = {
  tagTypes: ['s'],
};
S.storyName = 'S';

export const SetMaxTextLength = Template.bind({});
SetMaxTextLength.args = {
  maxLength: 5,
};
SetMaxTextLength.storyName = 'Set max text length';
