import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import SnsLinkList, { ComponentProps } from 'components/blocks/SnsLinkList';

export default {
  title: 'Blocks/SnsLinkList',
  component: SnsLinkList,
  args: {
    snsList: [
      {
        id: 1,
        url: '',
      },
      {
        id: 2,
        url: '',
      },
      {
        id: 3,
        url: '',
      },
      {
        id: 4,
        url: '',
      },
      {
        id: 5,
        url: '',
      },
      {
        id: 6,
        url: '',
      },
      {
        id: 7,
        url: '',
      },
      {
        id: 8,
        url: '',
      },
    ],
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <SnsLinkList {...args}></SnsLinkList>;

export const Default = Template.bind({});
Default.args = {};
