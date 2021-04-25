import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import LabelRadio, { ComponentProps } from 'components/blocks/LabelRadio';

export default {
  title: 'Blocks/Checkbox and Radio/LabelRadio',
  component: LabelRadio,
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
  args: {
    values: [0, 1, 2, 3, 4, 5, 6, 7],
    selected: 4,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <LabelRadio {...args}></LabelRadio>;

export const Default = Template.bind({});
Default.args = {};
