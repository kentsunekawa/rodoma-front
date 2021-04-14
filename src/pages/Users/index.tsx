import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { RESPONSE_MESSAGES } from 'utils/messages';
import { SearchQuery, UserData_overview } from 'types';
import Users from 'utils/request/User';
import { searchQuerySelector, setMessage } from 'state/modules/app';

import PageBase from 'components/layouts/PageBase';
import InfinityScroll from 'components/modules/InfinityScroll';
import ListHeader from 'components/blocks/ListHeader';
import UsersList from 'components/modules/UsersList';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Users';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  searchQuery: SearchQuery;
  users: UserData_overview[];
  getUser: (
    currentUsers: UserData_overview[],
    currentOffset: number,
    cb: (count: number) => void
  ) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <PageBase>
      <ListHeader
        title='ユーザー'
        sortKeys={[
          // {
          //   value: 'likes_count',
          //   label: 'Like'
          // },
          {
            value: 'created_at',
            label: 'New'
          },
        ]}
        className='userListHeader'
      />      
      <InfinityScroll
        resetTriggerKeys={[props.searchQuery]}
        list={props.users}
        getDataFunc={props.getUser}
      >
        <UsersList
          users={props.users}
        />
      </InfinityScroll>
    </PageBase>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQuerySelector);  
  const [users, setUsers] = useState<UserData_overview[]>([]);
  const isMouted = useRef<Boolean>(false);

  const getUser = async (
    currentUsers: UserData_overview[] = [],
    currentOffset: number = 0,
    cb: (count: number) => void,
  ) => {
    try {
      const result = await Users.getUsers(searchQuery, currentOffset, 20);
      if(result.status === 'success_get_users' && result.data) {
        if(isMouted.current) {
          cb(result.data.query.all!);
          setUsers([
            ...currentUsers,
            ...result.data.users,
          ]); 
        }
      }
    } catch(error) {
      dispatch(setMessage({
        isShow: true,
        type: 'error',
        message: RESPONSE_MESSAGES.error,
      }));
    }
  }

  useEffect(() => {
    if(isMouted.current) {
      setUsers([]);
    }
  }, [searchQuery])

  useEffect(() => {
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    }
  }, [])

  const props = { searchQuery, users, getUser };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;