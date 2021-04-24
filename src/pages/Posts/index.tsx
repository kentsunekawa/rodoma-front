import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import { SearchQuery, PostData_overview, UserData_overview } from 'types';
import { RESPONSE_MESSAGES } from 'utils/messages';
import Post from 'utils/request/Post';
import PageBase from 'components/layouts/PageBase';
import {
  searchQuerySelector,
  setMessage,
  redirectPathSelector,
  setRedirectPath,
  setModal,
  isDoorShownSelector,
} from 'state/modules/app';
import { userSelector, isSignupCompleteSelector, setIsSignupComplete } from 'state/modules/user';
import InfinityScroll from 'components/modules/InfinityScroll';
import PostBoxList from 'components/modules/PostBoxList';
import Fv from 'components/blocks/Fv';
import ListHeader from 'components/blocks/ListHeader';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconAdd } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Posts';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  user: UserData_overview | null;
  posts: PostData_overview[];
  searchQuery: SearchQuery;
  getPosts: (
    currentPosts: PostData_overview[],
    currentOffset: number,
    cb: (count: number) => void
  ) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <Fv />
    <PageBase>
      <ListHeader
        title="ロードマップ"
        listType="post"
        sortKeys={[
          {
            value: 'likes_count',
            label: 'Like',
          },
          {
            value: 'marks_count',
            label: 'Mark',
          },
          {
            value: '',
            label: 'New',
          },
        ]}
        className="postsListHeader"
      />
      <InfinityScroll
        resetTriggerKeys={[props.searchQuery]}
        list={props.posts}
        getDataFunc={props.getPosts}
      >
        <PostBoxList posts={props.posts} />
      </InfinityScroll>
    </PageBase>
    {props.user && (
      <CircleButton link="/roadmaps/create" types={['gradient', 'l']} className="createButton">
        <IconAdd />
      </CircleButton>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSignUpComplete = useSelector(isSignupCompleteSelector);
  const isDoorShown = useSelector(isDoorShownSelector);
  const redirectToPath = useSelector(redirectPathSelector);
  const searchQuery = useSelector(searchQuerySelector);
  const user = useSelector(userSelector);
  const [posts, setPosts] = useState<PostData_overview[]>([]);
  const isMouted = useRef<boolean>(false);

  const getPosts = async (
    currentPosts: PostData_overview[] = [],
    currentOffset = 0,
    cb: (count: number) => void
  ) => {
    try {
      const result = await Post.getPosts(searchQuery, currentOffset, 20);
      if (result.status === 'success_get_posts' && result.data) {
        if (isMouted.current && result.data.query.all !== undefined) {
          cb(result.data.query.all);
          setPosts([...currentPosts, ...result.data.posts]);
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

  useEffect(() => {
    if (isMouted.current) {
      setPosts([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMouted.current) {
      if (isSignUpComplete) {
        timer = setTimeout(() => {
          dispatch(setModal('signUpComplete'));
          dispatch(setIsSignupComplete(false));
        }, 3000);
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [isDoorShown, isSignUpComplete, dispatch]);

  useEffect(() => {
    if (redirectToPath) {
      dispatch(setRedirectPath(''));
      history.push(redirectToPath);
    }
  }, [redirectToPath, dispatch, history]);

  useEffect(() => {
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    };
  }, []);

  const props = { posts, searchQuery, user, getPosts };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
