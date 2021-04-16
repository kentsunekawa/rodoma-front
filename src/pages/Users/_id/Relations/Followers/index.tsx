import React, { useState, useEffect, useContext, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { UserData_overview } from 'types';
import { RESPONSE_MESSAGES } from 'utils/messages';
import { setMessage } from 'state/modules/app';

import User from 'utils/request/User';
import InfinityScroll from 'components/modules/InfinityScroll';
import UserList from 'components/modules/UsersList';
import { UserContext } from '../../';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Followers';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  userId: number | undefined;
  followers: UserData_overview[];
  getFollowers: (
    currentFollowers: UserData_overview[],
    currentOffset: number,
    cb: (count: number) => void
  ) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <InfinityScroll
      resetTriggerKeys={[props.userId]}
      list={props.followers}
      getDataFunc={props.getFollowers}
    >
      <UserList users={props.followers} />
    </InfinityScroll>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const { state } = useContext(UserContext);
  const [followers, setFollowers] = useState<UserData_overview[]>([]);
  const isMouted = useRef<boolean>(false);

  const getFollowers = async (
    currentFollowers: UserData_overview[] = [],
    currentOffset = 0,
    cb: (count: number) => void
  ) => {
    if (state.id) {
      try {
        const result = await User.getFollowers(state.id, currentOffset, 20);
        if (result.status === 'success_get_followers' && result.data) {
          if (isMouted.current && result.data.query.all) {
            cb(result.data.query.all);
            setFollowers([
              ...currentFollowers,
              ...result.data.users.map((user) => {
                return {
                  id: user.id,
                  name: user.name,
                  icon_url: user.icon_url,
                };
              }),
            ]);
          }
        }
      } catch (error) {
        dispatch(
          setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error,
          })
        );
      }
    }
  };

  useEffect(() => {
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    };
  }, []);

  const props = {
    userId: state.id,
    followers,
    getFollowers,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
