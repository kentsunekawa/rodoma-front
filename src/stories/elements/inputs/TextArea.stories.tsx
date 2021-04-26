import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextArea, { ComponentProps } from 'components/elements/inputs/TextArea';

export default {
  title: 'Elements/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    onChange: {
      action: 'change',
    },
    // label: {
    //   control: 'input',
    // },
    // placeholder: {
    //   control: 'input',
    // },
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';

export const NoBorder = Template.bind({});
NoBorder.args = {
  types: ['noBorder'],
  placeholder: 'This is borderless textarea.',
};
NoBorder.storyName = 'No Border';

export const S = Template.bind({});
S.args = {
  types: ['s'],
  placeholder: 'This is S size textarea.',
};
S.storyName = 'S';

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Description',
};
WithLabel.storyName = 'with Label';

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Hi, I am Sample User.',
};
WithPlaceholder.storyName = 'with Placeholder';

export const SetHeight = Template.bind({});
SetHeight.args = {
  height: 500,
  placeholder: 'This textarea set height 500px.',
};
SetHeight.storyName = 'Set height by number';

export const Markdown = Template.bind({});
Markdown.args = {
  isMarkdownOk: true,
};
Markdown.storyName = 'Markdown OK';
