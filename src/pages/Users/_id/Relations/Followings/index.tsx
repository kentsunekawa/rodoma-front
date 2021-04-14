import React, { useState, useEffect, useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { UserData_overview } from 'types';
import { RESPONSE_MESSAGES } from 'utils/messages';
import User from 'utils/request/User';
import { setMessage, setModal, setIsLoading } from 'state/modules/app';

import Modal from 'components/modules/Modal';
import InfinityScroll from 'components/modules/InfinityScroll';
import UserList from 'components/modules/UsersList';
import Paragraph from 'components/elements/Paragraph';
import RoundButton from 'components/elements/buttons/RoundButton';

import { UserContext } from '../..';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Followings';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  modalName: string;
  isLogin: boolean | undefined;
  userId: number | undefined;
  followings: UserData_overview[];
  listResetCount: number;
  removeFollow: () => void;
  removeFollowConfirm: (id: number) => void;
  getFollowers: (
    currentFollowers: UserData_overview[],
    currentOffset: number,
    cb: (count: number) => void
  ) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <Modal modalName={props.modalName} className='removeFollowModal'>
      <div className='row'>
        <Paragraph>
          フォローを解除しますか？
        </Paragraph>
      </div>
      <div className='row'>
        <RoundButton onClick={props.removeFollow} types={['gradient', 'l']}>
          OK
        </RoundButton>
      </div>
    </Modal>
    <InfinityScroll
      resetTriggerKeys={[props.userId, props.listResetCount]}
      list={props.followings}
      getDataFunc={props.getFollowers}
    >
      <UserList
        users={props.followings}
        onRemove={props.isLogin ? props.removeFollowConfirm : undefined}
      />
    </InfinityScroll>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const modalName = 'removeFollow';

  const dispatch = useDispatch();
  const {state, contextDispatch} = useContext(UserContext);
  const [willRemoveId, setWillRemoveId] = useState<null | number>(null);
  const [followings, setFollowings] = useState<UserData_overview[]>([]);
  const [listResetCount, setListResetCount] = useState<number>(0);
  const isMouted = useRef<Boolean>(false);
  

  const getFollowers = async (
    currentFollowings: UserData_overview[] = [],
    currentOffset: number = 0,
    cb: (count: number) => void,
  ) => {
    if(state.id) {
      try{
        const result = await User.getFollowings(state.id, currentOffset, 20);
        if(result.status === 'success_get_followings' && result.data) {
          if(isMouted.current) {
            cb(result.data.query.all!);
            setFollowings([
              ...currentFollowings,
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
  }

  const removeFollowConfirm = (id: number) => {
    setWillRemoveId(id);
    dispatch(setModal(modalName));
  }
  
  const removeFollow = async () => {
    dispatch(setModal(''));
    dispatch(setIsLoading(true));
    if(state.id && willRemoveId) {
      try{
        const result = await User.putRelation(state.id, willRemoveId);
        if(!result.data?.relation) {
          setListResetCount(listResetCount + 1);
          dispatch(setIsLoading(false));
          dispatch(setMessage({
            isShow: true,
            type: 'success',
            message: RESPONSE_MESSAGES.success_unfollow,
          }));
        }
      } catch (error) {
        dispatch(setIsLoading(false));
        dispatch(setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error,
        }));
      }
    }
  }

  useEffect(() => {
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    }
  }, [])

  const props = {
    modalName,
    isLogin: state.isLogin,
    userId: state.id,
    followings,
    listResetCount,
    removeFollow,
    removeFollowConfirm,
    getFollowers,
  };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;