import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import TextButton, { ComponentProps } from 'components/elements/buttons/TextButton';
import { IconRight } from 'components/elements/icons';

export default {
  title: 'Elements/Buttons/TextButton',
  component: TextButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <TextButton {...args}>Text Button</TextButton>;
const WithIcon: Story<ComponentProps> = (args) => (
  <TextButton {...args}>
    With Icon Right
    <div className="icon">
      <IconRight />
    </div>
  </TextButton>
);

export const Default = Template.bind({});
Default.args = {};

export const WidthIconRight = WithIcon.bind({});
WidthIconRight.args = {
  types: ['withIconRight'],
};

export const LPrimary = Template.bind({});
LPrimary.args = {
  types: ['primary', 'l'],
};

export const MPrimary = Template.bind({});
MPrimary.args = {
  types: ['primary', 'm'],
};

export const SPrimary = Template.bind({});
SPrimary.args = {
  types: ['primary', 's'],
};

export const LGrayMedium = Template.bind({});
LGrayMedium.args = {
  types: ['gray_midium', 'l'],
};

export const MGray_medium = Template.bind({});
MGray_medium.args = {
  types: ['gray_midium', 'm'],
};

export const SGray_medium = Template.bind({});
SGray_medium.args = {
  types: ['gray_midium', 's'],
};
