import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import SwitchComponent, { ComponentProps } from 'components/elements/Switch';

export default {
  title: 'Elements/Others/Switch',
  component: SwitchComponent,
  argTypes: {
    onChange: {
      action: 'change',
    },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <SwitchComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Switch';
