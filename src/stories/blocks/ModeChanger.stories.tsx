import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import ModeChanger from 'components/blocks/ModeChanger';

export default {
  title: 'Blocks/ModeChanger',
  component: ModeChanger,
} as Meta;

const Template: Story = () => <ModeChanger />;

export const Default = Template.bind({});
Default.args = {
  change: (value: boolean) => {
    console.log(value);
  },
};

Default.storyName = 'Default';
