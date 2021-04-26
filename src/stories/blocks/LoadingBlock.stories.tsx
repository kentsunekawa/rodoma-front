import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import LoadingBlock, { ComponentProps } from 'components/blocks/LoadingBlock';

export default {
  title: 'Blocks/LoadingBlock',
  component: LoadingBlock,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <LoadingBlock {...args}></LoadingBlock>;

export const Default = Template.bind({});
Default.args = {};

Default.storyName = 'Default';
