import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchKeyword, { ComponentProps } from 'components/elements/inputs/SearchKeyword';

export default {
  title: 'Elements/Inputs/SearchKeyword',
  component: SearchKeyword,
  onChange: {
    action: 'changed',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <SearchKeyword {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Default';

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'This is search keyword input.',
};
WithPlaceholder.storyName = 'with Placeholder';
