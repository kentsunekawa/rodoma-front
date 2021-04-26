import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal, modalSelector } from 'state/modules/app';

import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { ComponentProps } from 'components/modules/Modal';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Modules/Modal',
  component: Modal,
  args: {
    modalName: 'sample',
  },
} as Meta;

const Template: Story<ComponentProps> = (args) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelector);
  const click = () => {
    dispatch(setModal(modal === '' ? args.modalName : ''));
  };

  useEffect(() => {
    dispatch(setModal(args.modalName));
  }, [dispatch]);

  return (
    <div>
      <StyledElements.SampleButton style={{ position: 'fixed', zIndex: 9999 }} onClick={click}>
        Toggle Modal
      </StyledElements.SampleButton>
      <Modal {...args}>This is modal sample.</Modal>
    </div>
  );
};

export const Closable = Template.bind({});
Closable.args = {
  closable: true,
};
Closable.storyName = 'Closable';

export const DisClosable = Template.bind({});
DisClosable.args = {
  closable: false,
};
DisClosable.storyName = 'DisClosable';
