import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { RESPONSE_MESSAGES } from 'utils/messages';
import { SearchQuery, PostData_overview } from 'types';
import Post from 'utils/request/Post';
import { searchQuerySelector, setMessage } from 'state/modules/app';

import PageBase from 'components/layouts/PageBase';
import InfinityScroll from 'components/modules/InfinityScroll';
import PostBoxList from 'components/modules/PostBoxList';
import ListHeader from 'components/blocks/ListHeader';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Posts';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
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
    <PageBase>
      <ListHeader
        title="ロードマップ"
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
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQuerySelector);
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
        if (isMouted.current && result.data.query.all) {
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
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    };
  }, []);

  const props = { posts, searchQuery, getPosts };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
