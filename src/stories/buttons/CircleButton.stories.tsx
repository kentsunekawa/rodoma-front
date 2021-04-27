import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import CircleButton, { ComponentProps } from 'components/elements/buttons/CircleButton';
import { IconFollow } from 'components/elements/icons';

export default {
  title: 'Elements/Buttons/CircleButton',
  component: CircleButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    // types: {
    //   control: {
    //     type: 'check',
    //     options: [
    //       'xxs',
    //       'xs',
    //       's',
    //       'm',
    //       'l',
    //       'gradient',
    //       'gray_dark',
    //       'gray_midium',
    //       'gray_light',
    //       'primary',
    //       'secondary',
    //       'posi',
    //       'outline',
    //     ],
    //   },
    // },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => (
  <CircleButton {...args}>
    <IconFollow />
  </CircleButton>
);

export const Default = Template.bind({});
Default.args = {};

export const LGradient = Template.bind({});
LGradient.args = {
  types: ['gradient', 'l'],
};

export const MGradient = Template.bind({});
MGradient.args = {
  types: ['gradient', 'm'],
};

export const SGradient = Template.bind({});
SGradient.args = {
  types: ['gradient', 's'],
};

export const XSGradient = Template.bind({});
XSGradient.args = {
  types: ['gradient', 'xs'],
};

export const XXSGradient = Template.bind({});
XXSGradient.args = {
  types: ['gradient', 'xxs'],
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

export const XSPrimary = Template.bind({});
XSPrimary.args = {
  types: ['primary', 'xs'],
};

export const XXSPrimary = Template.bind({});
XXSPrimary.args = {
  types: ['primary', 'xxs'],
};

export const LSecondary = Template.bind({});
LSecondary.args = {
  types: ['secondary', 'l'],
};

export const MSecondary = Template.bind({});
MSecondary.args = {
  types: ['secondary', 'm'],
};

export const SSecondary = Template.bind({});
SSecondary.args = {
  types: ['secondary', 's'],
};

export const XSSecondary = Template.bind({});
XSSecondary.args = {
  types: ['secondary', 'xs'],
};

export const XXSSecondary = Template.bind({});
XXSSecondary.args = {
  types: ['secondary', 'xxs'],
};

export const LDarkGray = Template.bind({});
LDarkGray.args = {
  types: ['gray_dark', 'l'],
};

export const MDarkGray = Template.bind({});
MDarkGray.args = {
  types: ['gray_dark', 'm'],
};

export const SDarkGray = Template.bind({});
SDarkGray.args = {
  types: ['gray_dark', 's'],
};

export const XSDarkGray = Template.bind({});
XSDarkGray.args = {
  types: ['gray_dark', 'xs'],
};

export const XXSDarkGray = Template.bind({});
XXSDarkGray.args = {
  types: ['gray_dark', 'xxs'],
};

export const LMediumGray = Template.bind({});
LMediumGray.args = {
  types: ['gray_midium', 'l'],
};

export const MMediumGray = Template.bind({});
MMediumGray.args = {
  types: ['gray_midium', 'm'],
};

export const SMediumGray = Template.bind({});
SMediumGray.args = {
  types: ['gray_midium', 's'],
};

export const XSMediumGray = Template.bind({});
XSMediumGray.args = {
  types: ['gray_midium', 'xs'],
};

export const XXSMediumGray = Template.bind({});
XXSMediumGray.args = {
  types: ['gray_midium', 'xxs'],
};

export const LLightGray = Template.bind({});
LLightGray.args = {
  types: ['gray_light', 'l'],
};

export const MLightGray = Template.bind({});
MLightGray.args = {
  types: ['gray_light', 'm'],
};

export const SLightGray = Template.bind({});
SLightGray.args = {
  types: ['gray_light', 's'],
};

export const XSLightGray = Template.bind({});
XSLightGray.args = {
  types: ['gray_light', 'xs'],
};

export const XXSLightGray = Template.bind({});
XXSLightGray.args = {
  types: ['gray_light', 'xxs'],
};

export const LPositive = Template.bind({});
LPositive.args = {
  types: ['posi', 'l'],
};

export const MPositive = Template.bind({});
MPositive.args = {
  types: ['posi', 'm'],
};

export const SPositive = Template.bind({});
SPositive.args = {
  types: ['posi', 's'],
};

export const XSPositive = Template.bind({});
XSPositive.args = {
  types: ['posi', 'xs'],
};

export const XXSPositive = Template.bind({});
XXSPositive.args = {
  types: ['outline', 'xxs'],
};

export const LOutline = Template.bind({});
LOutline.args = {
  types: ['outline', 'l'],
};

export const MOutline = Template.bind({});
MOutline.args = {
  types: ['outline', 'm'],
};

export const SOutline = Template.bind({});
SOutline.args = {
  types: ['outline', 's'],
};

export const XSOutline = Template.bind({});
XSOutline.args = {
  types: ['outline', 'xs'],
};

export const XXSOutline = Template.bind({});
XXSOutline.args = {
  types: ['outline', 'xxs'],
};
