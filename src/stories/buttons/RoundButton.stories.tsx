import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import RoundButton, { ComponentProps } from 'components/elements/buttons/RoundButton';
import { IconAdd } from 'components/elements/icons';

export default {
  title: 'Elements/Buttons/RoundButton',
  component: RoundButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <RoundButton {...args}>サインアップ</RoundButton>;
const Template_02: Story<ComponentProps> = (args) => (
  <RoundButton {...args}>画像を設定</RoundButton>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};

export const WithIcon = Template_02.bind({});
WithIcon.args = {
  types: ['gradient', 's', 'withIcon'],
  icon: <IconAdd />,
  disabled: false,
};

export const LGradient = Template.bind({});
LGradient.args = {
  types: ['gradient', 'l'],
  disabled: false,
};

export const MGradient = Template.bind({});
MGradient.args = {
  types: ['gradient', 'm'],
  disabled: false,
};

export const SGradient = Template.bind({});
SGradient.args = {
  types: ['gradient', 's'],
  disabled: false,
};

export const LGrayDark = Template.bind({});
LGrayDark.args = {
  types: ['gray_dark', 'l'],
  disabled: false,
};

export const MGrayDark = Template.bind({});
MGrayDark.args = {
  types: ['gray_dark', 'm'],
  disabled: false,
};

export const SGrayDark = Template.bind({});
SGrayDark.args = {
  types: ['gray_dark', 's'],
  disabled: false,
};

export const LGrayMedium = Template.bind({});
LGrayMedium.args = {
  types: ['gray_midium', 'l'],
  disabled: false,
};

export const MGrayMedium = Template.bind({});
MGrayMedium.args = {
  types: ['gray_midium', 'm'],
  disabled: false,
};

export const SGrayMedium = Template.bind({});
SGrayMedium.args = {
  types: ['gray_midium', 's'],
  disabled: false,
};

export const LGrayLight = Template.bind({});
LGrayLight.args = {
  types: ['gray_light', 'l'],
  disabled: false,
};

export const MGrayLight = Template.bind({});
MGrayLight.args = {
  types: ['gray_light', 'm'],
  disabled: false,
};

export const SGrayLight = Template.bind({});
SGrayLight.args = {
  types: ['gray_light', 's'],
  disabled: false,
};
