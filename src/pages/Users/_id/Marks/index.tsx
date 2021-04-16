import React, { useState, useEffect, useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { UserData, SearchQuery, PostData_overview } from 'types';
import User from 'utils/request/User';
import Post from 'utils/request/Post';
import { RESPONSE_MESSAGES } from 'utils/messages';
import { searchQuerySelector, setMessage, setModal, setIsLoading } from 'state/modules/app';

import Modal from 'components/modules/Modal';
import InfinityScroll from 'components/modules/InfinityScroll';
import PostBoxList from 'components/modules/PostBoxList';
import UserBlock from 'components/blocks/UserBlock';
import Paragraph from 'components/elements/Paragraph';
import RoundButton from 'components/elements/buttons/RoundButton';

import { UserContext } from '../';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'UserMarks';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  modalName: string;
  isLogin: boolean | undefined;
  user: UserData | null | undefined;
  posts: PostData_overview[];
  searchQuery: SearchQuery;
  listResetCount: number;
  getPosts: (
    currentPosts: PostData_overview[],
    currentOffset: number,
    cb: (count: number) => void
  ) => void;
  removeMarkConfirm: (id: number) => void;
  removeMark: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <Modal modalName={props.modalName}>
      <Paragraph>マークを外しますがよろしいですか？</Paragraph>
      <RoundButton onClick={props.removeMark} types={['gradient', 'l']}>
        OK
      </RoundButton>
    </Modal>
    <div className="userMain">
      <div className="userHeader">
        <UserBlock
          icon_url={props.user?.icon_url}
          userName={props.user?.name}
          types={['m', 'iconLeft']}
        />
      </div>
      <div className="relationListArea">
        <Paragraph types={['subTitle']}>マークしたロードマップ</Paragraph>
        <InfinityScroll
          resetTriggerKeys={[props.searchQuery, props.listResetCount]}
          list={props.posts}
          getDataFunc={props.getPosts}
        >
          <PostBoxList
            statusVisible
            posts={props.posts}
            onRemove={props.isLogin ? props.removeMarkConfirm : undefined}
          />
        </InfinityScroll>
      </div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const modalName = 'removeMark';

  const { state } = useContext(UserContext);
  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQuerySelector);
  const [posts, setPosts] = useState<PostData_overview[]>([]);
  const [willRemoveId, setWillRemoveId] = useState<null | number>(null);
  const [listResetCount, setListResetCount] = useState<number>(0);
  const isMouted = useRef<boolean>(false);

  const getPosts = async (
    currentPosts: PostData_overview[] = [],
    currentOffset = 0,
    cb: (count: number) => void
  ) => {
    try {
      if (state.id) {
        const result = await User.getPostsMarkedBySpecificUser(state.id, currentOffset, 20);
        if (result.status === 'success_get_posts' && result.data) {
          if (isMouted.current && result.data.query.all !== undefined) {
            cb(result.data.query.all);
            setPosts([...currentPosts, ...result.data.posts]);
          }
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
  };

  const removeMarkConfirm = (id: number) => {
    setWillRemoveId(id);
    dispatch(setModal(modalName));
  };

  const removeMark = async () => {
    dispatch(setModal(''));
    dispatch(setIsLoading(true));
    if (state.id && willRemoveId) {
      try {
        const result = await Post.putMark(willRemoveId, state.id);
        if (result.status === 'success_unmark') {
          setListResetCount(listResetCount + 1);
          dispatch(setIsLoading(false));
          dispatch(
            setMessage({
              isShow: true,
              type: 'success',
              message: RESPONSE_MESSAGES.success_unmark,
            })
          );
        }
      } catch (error) {
        dispatch(setIsLoading(false));
        if (error.response.data.status === 'fail_unmark') {
          dispatch(
            setMessage({
              isShow: true,
              type: 'error',
              message: RESPONSE_MESSAGES.fail_unmark,
            })
          );
        } else {
          dispatch(
            setMessage({
              isShow: true,
              type: 'error',
              message: RESPONSE_MESSAGES.error,
            })
          );
        }
      }
    }
  };

  useEffect(() => {
    if (isMouted.current) {
      setPosts([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    };
  }, []);

  const props = {
    modalName,
    isLogin: state.isLogin,
    user: state.user,
    searchQuery,
    posts,
    listResetCount,
    getPosts,
    removeMarkConfirm,
    removeMark,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
