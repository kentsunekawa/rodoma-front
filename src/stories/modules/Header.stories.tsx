import React from 'react';
import { useDispatch } from 'react-redux';
import { setCard } from 'state/modules/app';

import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { ComponentProps } from 'components/modules/Header';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Modules/Header',
  component: Header,
  args: {},
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  const dispatch = useDispatch();
  // const click = () => {
  //   dispatch(setCard('sample'));
  // };
  return (
    <div>
      {/* <StyledElements.SampleButton onClick={click}>Card Open</StyledElements.SampleButton> */}
      <Header {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
