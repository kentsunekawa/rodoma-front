import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import SelectorInputList, { ComponentProps } from 'components/blocks/SelectorInputList';

export default {
  title: 'Blocks/SelectorInputList',
  component: SelectorInputList,
  argTypes: {
    onChangeList: {
      action: 'change list',
    },
  },
  args: {
    label: 'URL',
    name: 'sns',
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
    listData: [
      {
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
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <SelectorInputList {...args}></SelectorInputList>;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';
