import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { signout } from 'state/modules/user';
import { UserData_overview } from 'types';

import * as styles from './styles';

import UserBlock from 'components/blocks/UserBlock';
import RoundButton from 'components/elements/buttons/RoundButton';
import Paragraph from 'components/elements/Paragraph';

// component root class name
const CLASSNAME = 'MenuContent';

// declare types

interface ComponentProps {
  className?: string;
  user: UserData_overview | null;
  closeFunc: () => void;
}

interface Props extends ComponentProps {
  logout: () => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {
      props.user
        ? <div className='inner -login'>
          <div className='upper'>
            <UserBlock
              userName={props.user.name}
              icon_url={props.user.icon_url}
              types={['l', 'alignCenter']}
            />
          </div>
          <div className='menu'>
            <ul className='list'>
              <li className='item'>
                <Link to={`/users/${props.user?.id}`} onClick={props.closeFunc}>
                  <Paragraph types={['center', 'nega', 'text']}>プロフィール</Paragraph>
                </Link>
              </li>
              <li className='item'>
                <Link to='/' onClick={props.closeFunc}>
                  <Paragraph types={['center', 'nega', 'text']}>ロードマップを探す</Paragraph>
                </Link>
              </li>
              <li className='item'>
                <Link to='/roadmaps/create' onClick={props.closeFunc}>
                  <Paragraph types={['center', 'nega', 'text']}>ロードマップを作る</Paragraph>
                </Link>
              </li>
              <li className='item'>
                <Link to='/users' onClick={props.closeFunc}>
                  <Paragraph types={['center', 'nega', 'text']}>ユーザーを探す</Paragraph>
                </Link>
              </li>
              <li className='item'>
                <button onClick={props.logout}>
                  <Paragraph types={['center', 'nega', 'text']}>サインアウト</Paragraph>
                </button>
              </li>
            </ul>
          </div>
        </div>
        : <div className='inner'>
          <div className='upper'>
            <RoundButton
              types={['l', 'gradient']}
              link='/signInOrUp'
              onClick={props.closeFunc}
            >
              サインイン
            </RoundButton>
          </div>
          <div className='menu'>
            <ul className='list'>
              <li className='item'>
                <Link to='/' onClick={props.closeFunc}>
                  <Paragraph types={['center', 'nega']}>ロードマップを探す</Paragraph>
                </Link>
              </li>
              <li className='item'>
                <Link to='/users' onClick={props.closeFunc}>
                  <Paragraph types={['center', 'nega']}>ユーザーを探す</Paragraph>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    }
    <div className='bottom'>
      <Link to='/about' onClick={props.closeFunc}>
        <Paragraph types={['center', 'nega']}>rodoma とは</Paragraph>
      </Link>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps: ComponentProps) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { closeFunc } = componentProps;

  const logout = () => {
    closeFunc();
    dispatch(signout());
    history.push('/signInOrUp');
  }
  const props = { logout };

  return <StyeldComponent { ...componentProps } { ...props }></StyeldComponent>;
}
export default Container;