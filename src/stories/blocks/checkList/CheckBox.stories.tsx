import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import CheckBox, { ComponentProps } from 'components/blocks/CheckList/CheckBox';

export default {
  title: 'Blocks/Checkbox and Radio/CheckList/CheckBox',
  component: CheckBox,
  argTypes: {
    onChange: {
      action: 'change',
    },
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', padding: '40px', background: '#ddd' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <CheckBox {...args}></CheckBox>;

export const Default = Template.bind({});
Default.args = {
  label: 'Default CheckBox',
};

Default.storyName = 'Default';

export const Negative = Template.bind({});
Negative.args = {
  types: ['nega'],
  label: 'Negative CheckBox',
};

Negative.storyName = 'Negative';

export const Outline = Template.bind({});
Outline.args = {
  types: ['outline'],
  label: 'Outline CheckBox',
};

Outline.storyName = 'Outline';
