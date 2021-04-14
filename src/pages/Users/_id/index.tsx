import React, { useEffect, createContext, Reducer, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { UserData, UserData_overview } from 'types';
import { userSelector } from 'state/modules/user';

import Summary from '../_id/Summary';
import Posts from '../_id/Posts';
import Marks from '../_id/Marks';
import Relations from '../_id/Relations';
import PageBase from 'components/layouts/PageBase';
import TabChanger from 'components/modules/TabChanger/';
import Tabs from 'components/modules/TabChanger/Tabs';
import Tab from 'components/modules/TabChanger/Tab';
import TabContents from 'components/modules/TabChanger/TabContents';
import TabContent from 'components/modules/TabChanger/TabContent';
import FollowButton from 'components/elements/buttons/FollowButton';
import {
  IconUser,
  IconList,
  IconMark,
  IconRelation
} from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'User';

// declare types

interface State {
  isLogin: boolean;
  id: number;
  user: UserData | null;
}

type SET_ID = {
  type: 'SET_ID';
  payload: number;
}

type SET_USER = {
  type: 'SET_USER';
  payload: UserData | null;
}

type SET_IS_LOGIN_USER = {
  type: 'SET_IS_LOGIN_USER';
  payload: boolean;
}

type Actions = SET_ID | SET_USER | SET_IS_LOGIN_USER;

interface Context {
  state: Partial<State>;
  contextDispatch: (arg0: Actions) => void;
};

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  user: UserData_overview | null;
  id: number | null;
  isLogin: boolean;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <PageBase>
      <TabChanger
        trigger={{
          keys: [props.id],
          selectedTab: 0
        }}
        selected={0}
      >
        <Tab className='mainTab'>
          <Tabs
            tabList={[
              <IconUser />,
              <IconList />,
              <IconMark />,
              <IconRelation />,
            ]}
            tabType={'rounded'}
          />
        </Tab>
        <TabContents>
          <TabContent>
            <Summary />
          </TabContent>
          <TabContent>
            <Posts />
          </TabContent>
          <TabContent>
            <Marks />
          </TabContent>
          <TabContent>
            <Relations />
          </TabContent>
        </TabContents>
      </TabChanger>
    </PageBase>
    {
      props.user && <FollowButton
        targetUserId={props.id!}
      />
    }
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// context
export const UserContext = createContext<Context>({
  state: {},
  contextDispatch: () => {}
});

// reducer
const reducer: Reducer<State, Actions> = (state: State, action: Actions) => {
  switch (action.type) {
    case 'SET_IS_LOGIN_USER':
      return {
        ...state,
        isLogin: action.payload,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
}

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const history = useHistory();
  const { id } = useParams<{id: string}>();
  const user = useSelector(userSelector);
 
  const [state, contextDispatch] = useReducer(reducer, {
    isLogin: false,
    id: Number(id),
    user: null,
  });

  useEffect(() => {
    contextDispatch({
      type: 'SET_IS_LOGIN_USER',
      payload: (user && (user.id === state.user?.id)) || false,
    });
  }, [state.user])

  useEffect(() => {
    if(!Number(id)) {
      history.push('/notFound');
    } else {
      contextDispatch({
        type: 'SET_USER',
        payload: null,
      });
      contextDispatch({
        type: 'SET_ID',
        payload: Number(id),
      });
    }
  }, [id]);

  const props = {
    user: state.user,
    id: state.id,
    isLogin: state.isLogin,
  };

  return <UserContext.Provider value={{state, contextDispatch}}>
    <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>
  </UserContext.Provider>;
}
export default Container;