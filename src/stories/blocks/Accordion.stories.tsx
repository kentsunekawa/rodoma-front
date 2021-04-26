import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion, { ComponentProps } from 'components/blocks/Accordion';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Blocks/Accordion',
  component: Accordion,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  decorators: [
    (Story) => (
      <StyledElements.Wrapper className="-gradient" style={{ width: '500px', padding: '40px' }}>
        <Story />
      </StyledElements.Wrapper>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <Accordion {...args}></Accordion>;

export const Default = Template.bind({});
Default.args = {
  types: ['nega'],
  parent: {
    id: 0,
    name: 'Parent Item',
  },
  childList: [
    {
      id: 0,
      name: 'Child Item 01',
    },
    {
      id: 1,
      name: 'Child Item 02',
    },
    {
      id: 2,
      name: 'Child Item 03',
    },
    {
      id: 3,
      name: 'Child Item 04',
    },
    {
      id: 4,
      name: 'Child Item 05',
    },
  ],
};

Default.storyName = 'Default';
