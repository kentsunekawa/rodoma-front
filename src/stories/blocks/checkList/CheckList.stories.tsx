import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import CheckList, { ComponentProps } from 'components/blocks/CheckList';

export default {
  title: 'Blocks/Checkbox and Radio/CheckList',
  component: CheckList,
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
  args: {
    selected: [0],
    values: [
      {
        value: 0,
        label: 'check box 01',
      },
      {
        value: 1,
        label: 'check box 02',
      },
      {
        value: 2,
        label: 'check box 03',
      },
      {
        value: 3,
        label: 'check box 04',
      },
      {
        value: 4,
        label: 'check box 05',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', padding: '40px', background: '#ddd' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <CheckList {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';

export const Nega = Template.bind({});
Nega.args = {
  boxTypes: ['nega'],
};
Nega.storyName = 'Negative';

export const Outline = Template.bind({});
Outline.args = {
  boxTypes: ['outline'],
};
Outline.storyName = 'Outline';
