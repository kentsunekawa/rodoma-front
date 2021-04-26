import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCard } from 'state/modules/app';

import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { ComponentProps } from 'components/modules/Card';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Modules/Card',
  component: Card,
  args: {
    cardName: 'sample',
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(setCard(args.cardName));
  };

  useEffect(() => {
    dispatch(setCard(args.cardName));
  }, [dispatch, args.cardName]);

  return (
    <div>
      <StyledElements.SampleButton onClick={click}>Card Open</StyledElements.SampleButton>
      <Card {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
