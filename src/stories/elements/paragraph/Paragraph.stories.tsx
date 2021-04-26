import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Paragraph, { ComponentProps } from 'components/elements/Paragraph';

export default {
  title: 'Elements/Paragraph/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story<ComponentProps> = (args) => (
  <Paragraph {...args}>テキストテキストテキストテキスト</Paragraph>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = { types: ['primary'] };
Primary.storyName = 'Primary';

export const Negative = Template.bind({});
Negative.args = { types: ['nega'] };
Negative.storyName = 'Negative';

export const GigTitle = Template.bind({});
GigTitle.args = {
  types: ['bigTitle'],
};
GigTitle.storyName = 'Big Title';

export const Title = Template.bind({});
Title.args = {
  types: ['title'],
};
Title.storyName = 'Title';

export const SubTitle = Template.bind({});
SubTitle.args = {
  types: ['subTitle'],
};
SubTitle.storyName = 'Sub Title';

export const catchText = Template.bind({});
catchText.args = {
  types: ['catchText'],
};
catchText.storyName = 'Catch Text';

export const Text = Template.bind({});
Text.args = {
  types: ['text'],
};
Text.storyName = 'Text';

export const Caption = Template.bind({});
Caption.args = {
  types: ['caption'],
};
Caption.storyName = 'Caption';

export const SmallCaption = Template.bind({});
SmallCaption.args = {
  types: ['smallCaption'],
};
SmallCaption.storyName = 'SmallCaption';

export const Bold = Template.bind({});
Bold.args = {
  types: ['bold'],
};
Bold.storyName = 'Bold';

export const SemiBold = Template.bind({});
SemiBold.args = {
  types: ['semiBold'],
};
SemiBold.storyName = 'SemiBold';
