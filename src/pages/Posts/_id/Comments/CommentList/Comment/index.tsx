import React from 'react';
import Styled from 'styled-components';

import { Link } from 'react-router-dom';

import { UserData_overview } from 'types';
import { formatDate } from 'utils';

import UserIcon from 'components/elements/UserIcon';
import CircleButton from 'components/elements/buttons/CircleButton'
import { IconClose } from 'components/elements/icons/';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Comment';

// declare types

interface ComponentProps {
  user: UserData_overview;
  created_at: string;
  id: number;
  isLogin: boolean;
  className?: string;
  onClick: (id: number) => void;
}

interface Props extends ComponentProps {
  date: string;
  onClickDeleteButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className='icon'>
      <Link to={`/users/${props.user.id}`}>
        <UserIcon
          url={props.user.icon_url}
        />
      </Link>
    </div>
    <div className='comment'>
      <div className='date'>{props.date}</div>
      {props.children}
      <span className='userName'>{props.user.name}</span>
      {props.isLogin && (
        <div className='button'>
          <CircleButton
            onClick={props.onClickDeleteButton}
            types={['gray_dark', 's']}
          >
            <IconClose />
          </CircleButton>
        </div>
      )}
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  ${({isLogin}) => isLogin && styles.login}
`;

// container component
const Container: React.FC<ComponentProps> = componentPorps => {

  const { id, created_at, onClick } = componentPorps;

  const date = formatDate(new Date(created_at), 'YYYY/MM/DD HH:MM');

  const onClickDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(id);
  }

  const props = { onClickDeleteButton, date };

  return <StyeldComponent { ...componentPorps } { ...props }></StyeldComponent>;
}
export default Container;

