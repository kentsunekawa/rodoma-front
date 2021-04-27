import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsDoorShow } from 'state/modules/app';

import { Story, Meta } from '@storybook/react/types-6-0';
import Door, { ComponentProps } from 'components/modules/Door';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Modules/Door',
  component: Door,
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(setIsDoorShow(false));
  };
  return (
    <div>
      <StyledElements.SampleButton style={{ position: 'fixed', zIndex: 9999 }} onClick={click}>
        Door Open
      </StyledElements.SampleButton>
      <Door {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
