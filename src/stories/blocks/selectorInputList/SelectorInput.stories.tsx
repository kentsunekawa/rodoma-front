import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import SelectorInput, { ComponentProps } from 'components/blocks/SelectorInputList/SelectorInput';

export default {
  title: 'Blocks/SelectorInputList/SelectorInput',
  component: SelectorInput,
  argTypes: {
    onClickDelete: {
      action: 'delete',
    },
    onSelectorChange: {
      action: 'change selector',
    },
    onTextChange: {
      action: 'text change',
    },
  },
  args: {
    index: 0,
    name: 'sample',
    selectorData: {
      selected: 1,
      options: [
        {
          value: 1,
          label: 'Twitter',
        },
        {
          value: 2,
          label: 'Facebook',
        },
        {
          value: 3,
          label: 'Linkedin',
        },
        {
          value: 4,
          label: 'instagram',
        },
        {
          value: 5,
          label: 'Piterest',
        },
        {
          value: 6,
          label: 'YouTube',
        },
        {
          value: 7,
          label: 'note',
        },
        {
          value: 8,
          label: 'mixi',
        },
      ],
    },
    inputData: {
      value: '',
      label: 'URL',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <SelectorInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
