import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isMenuOpenSelector, toggleMenu } from 'state/modules/app';
import { setUser } from 'state/modules/user';
import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { ComponentProps } from 'components/modules/Menu';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Modules/Menu',
  component: Menu,
  args: {},
} as Meta;

const LogoutTemplate: Story<ComponentProps> = (args) => {
  const isMenuOpen = useSelector(isMenuOpenSelector);
  const dispatch = useDispatch();
  const click = () => {
    dispatch(toggleMenu(isMenuOpen ? false : true));
  };

  useEffect(() => {
    dispatch(setUser(null));
    dispatch(toggleMenu(true));
  }, [dispatch]);
  return (
    <div>
      <StyledElements.SampleButton onClick={click} style={{ position: 'fixed', zIndex: 9999 }}>
        Toggle Menu
      </StyledElements.SampleButton>
      <Menu {...args} />
    </div>
  );
};

const LoginTemplate: Story<ComponentProps> = (args) => {
  const isMenuOpen = useSelector(isMenuOpenSelector);
  const dispatch = useDispatch();

  const click = () => {
    dispatch(toggleMenu(isMenuOpen ? false : true));
  };

  useEffect(() => {
    dispatch(
      setUser({
        id: 1,
        name: 'Sample User',
        icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
      })
    );
    dispatch(toggleMenu(true));
  }, [dispatch]);

  return (
    <div>
      <StyledElements.SampleButton onClick={click} style={{ position: 'fixed', zIndex: 9999 }}>
        Toggle Menu
      </StyledElements.SampleButton>
      <Menu {...args} />
    </div>
  );
};

export const Logout = LogoutTemplate.bind({});
Logout.args = {};
Logout.storyName = 'Logout';

export const Login = LoginTemplate.bind({});
Login.args = {};
Login.storyName = 'Login';
