import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from 'state/modules/user';
import {
  isMenuOpenSelector,
  isSearchPanelOpenSelector,
  toggleMenu,
  toggleSearchPanel
} from 'state/modules/app';
import { UserData_overview } from 'types/';

import Styled from 'styled-components';
import * as styles from './styles';

import { Link } from 'react-router-dom';
import CircleButton from 'components/elements/buttons/CircleButton';
import UserIcon from 'components/elements/UserIcon';
import { IconMenu, IconSearch, IconClose } from 'components/elements/icons';
import Logo from 'components/elements/Logo';

// component root class name
const CLASSNAME = 'Header';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  user: UserData_overview | null;
  isSearchPanelOpen: boolean;
  userIconClick: () => void;
  menuOpen: () => void;
  searchOpen: () => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <header className={`${CLASSNAME} ${props.className}`}>
    <Link to='/' className='logo'>
      <Logo />
    </Link>
    <div className='nav'>
      {
        props.user && (
          <div className='item'>
            <Link to={`/users/${props.user.id}`} className='button' onClick={props.userIconClick}>
              <UserIcon
                url={props.user.icon_url}
              />
            </Link>
          </div>
        )
      }
      <div className='item'>        
        <CircleButton
          types={['m']}
          onClick={props.searchOpen}
        >
          {
            props.isSearchPanelOpen
              ? <IconClose />
              : <IconSearch />
          }

        </CircleButton>
      </div>
      <div className='item'>
        <CircleButton
          types={['m']}
          onClick={props.menuOpen}
        >
          <IconMenu />
        </CircleButton>
      </div>
    </div>
  </header>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps: ComponentProps) => {

  const dispatch = useDispatch()
  const user = useSelector(userSelector);
  const isMenuOpen = useSelector(isMenuOpenSelector);
  const isSearchPanelOpen = useSelector(isSearchPanelOpenSelector);

  const userIconClick = () => {
    dispatch(toggleSearchPanel(false));
  }

  const menuOpen = () => {
    dispatch(toggleSearchPanel(false));
    dispatch(toggleMenu(isMenuOpen ? false : true));
  }
  
  const searchOpen = () => {
    dispatch(toggleSearchPanel(isSearchPanelOpen ? false : true));
  }

  const props = { user, isSearchPanelOpen, userIconClick, menuOpen, searchOpen };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;