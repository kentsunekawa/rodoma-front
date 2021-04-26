import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Selector, { ComponentProps } from 'components/elements/inputs/Selector';

export default {
  title: 'Elements/Inputs/Selector',
  component: Selector,
  onChange: {
    action: 'changed',
  },
  args: {
    options: [
      {
        value: 0,
        label: 'Choice 01',
      },
      {
        value: 1,
        label: 'Choice 02',
      },
      {
        value: 2,
        label: 'Choice 03',
      },
      {
        value: 3,
        label: 'Choice 04',
      },
      {
        value: 4,
        label: 'Choice 05',
      },
    ],
  },
  argTypes: {
    value: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <Selector {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Selector',
};
WithLabel.storyName = 'with Label';

export const S = Template.bind({});
S.args = {
  types: ['s'],
};
S.storyName = 'S';

export const SWithLabel = Template.bind({});
SWithLabel.args = {
  label: 'Selector',
  types: ['s'],
};
SWithLabel.storyName = 'S with Label';

export const Primary = Template.bind({});
Primary.args = {
  types: ['primary'],
};
Primary.storyName = 'Primary';

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.storyName = 'Disabled';
