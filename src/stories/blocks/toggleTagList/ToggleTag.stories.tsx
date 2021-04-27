import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import ToggleTag, { ComponentProps } from 'components/blocks/ToggleTagList/ToggleTag';
import { IconClose } from 'components/elements/icons';

export default {
  title: 'Blocks/ToggleTagList/ToggleTag',
  component: ToggleTag,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
  args: {
    icon: <IconClose />,
    value: 'ThisIsTagText',
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
  return <ToggleTag {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';
