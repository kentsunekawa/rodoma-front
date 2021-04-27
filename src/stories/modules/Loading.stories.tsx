import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, isLoadingSelector } from 'state/modules/app';

import { Story, Meta } from '@storybook/react/types-6-0';
import Loading, { ComponentProps } from 'components/modules/Loading';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Modules/Loading',
  component: Loading,
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const click = () => {
    dispatch(setIsLoading(isLoading ? false : true));
  };

  useEffect(() => {
    dispatch(setIsLoading(true));
  }, [dispatch]);

  return (
    <div>
      <StyledElements.SampleButton style={{ position: 'fixed', zIndex: 9999 }} onClick={click}>
        Toggle Loading
      </StyledElements.SampleButton>
      <Loading {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
