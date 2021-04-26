import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import ToggleTagList, { ComponentProps } from 'components/blocks/ToggleTagList';
import { IconClose } from 'components/elements/icons';

export default {
  title: 'Blocks/ToggleTagList',
  component: ToggleTagList,
  argTypes: {
    onClick: {
      action: 'click tag',
    },
    types: {
      control: {
        type: 'check',
        options: ['inlineBlock', 'oneLine'],
      },
    },
  },
  args: {
    list: [
      {
        id: 1,
        name: 'ThisIsTagTextThisIsTagText01',
      },
      {
        id: 2,
        name: 'ThisIsTagTextThisIsTagText02',
      },
    ],
    icon: <IconClose />,
    value: 'ThisIsTagText',
    types: ['center'],
  },
  // decorators: [
  //   (Story) => (
  //     <div style={{ width: '100%', maxWidth: '500px', background: '#efefef', padding: '40px' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  return <ToggleTagList {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';

export const Outline = Template.bind({});
Outline.args = {
  types: ['oneLine'],
};
Outline.storyName = 'One Line';

export const WithSeparator = Template.bind({});
WithSeparator.args = {
  types: ['oneLine'],
  separator: '>',
};
WithSeparator.storyName = 'with Separator';
