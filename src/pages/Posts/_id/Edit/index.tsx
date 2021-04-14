import React, { useEffect, createContext, useReducer, Reducer  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { PostData, PostData_min, UserData_overview } from 'types';
import { RESPONSE_MESSAGES } from 'utils/messages';
import Post from 'utils/request/Post';
import User from 'utils/request/User';
import { setMessage } from 'state/modules/app';
import { userSelector } from 'state/modules/user';

import PageBase from 'components/layouts/PageBase';
import LoadingBlock from 'components/blocks/LoadingBlock';
import PostCreator from './PostCreator';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostCreate';

// declare types
interface State {
  isSaved: boolean;
  isNew: boolean;
  post: PostData | null;
  id: number | null;
  posts: PostData_min[];
  followings: UserData_overview[];
}

type SET_IS_SAVED = {
  type: 'SET_IS_SAVED';
  payload: boolean;
}

type SET_IS_NEW = {
  type: 'SET_IS_NEW';
  payload: boolean;
}

type SET_ID = {
  type: 'SET_ID';
  payload: number | null;
}

type SET_POST = {
  type: 'SET_POST',
  payload: PostData | null;
}

type SET_POSTS = {
  type: 'SET_POSTS',
  payload: PostData_min[];
}

type SET_FOLLOWERS = {
  type: 'SET_FOLLOWERS',
  payload: UserData_overview[];
}

type Actions = SET_ID | SET_POST | SET_POSTS | SET_IS_NEW | SET_FOLLOWERS | SET_IS_SAVED;

interface Context {
  state: Partial<State>,
  contextDispatch: (arg0: Actions) => void;
}

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  post: PostData | null;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
  {
    props.post
    ? <PostCreator
      post={props.post}
    />
    : <LoadingBlock />
  }
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// context
export const PostEditContext = createContext<Context>({
  state: {},
  contextDispatch: () => {},
});

const reducer: Reducer<State, Actions> = (state: State, action: Actions) => {
  switch(action.type) {
    case 'SET_ID':
      return {
        ...state,
        id: action.payload,
      }
    case 'SET_POST':
      return {
        ...state,
        post: action.payload,
      }
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload,
      }
    case 'SET_IS_NEW':
      return {
        ...state,
        isNew: action.payload,
      }
    case 'SET_IS_SAVED':
      return {
        ...state,
        isSaved: action.payload,
      }
    case 'SET_FOLLOWERS':
      return {
        ...state,
        followings: action.payload,
      }
    default:
      return state;
  }
}

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<{id: string | undefined}>();
  const user = useSelector(userSelector);
  const [state, contextDispatch] = useReducer(reducer, {
    isNew: false,
    isSaved: false,
    id: id ? Number(id) : null,
    post: null,
    posts: [],
    followings: [],
  });

  const emptyPost: PostData = {
    id: 0,
    user_id: user!.id,
    category_id: 1,
    specialty_id: 1,
    release_status: 0,
    title: 'Roadmap title here...',
    description: '',
    eye_catch_url: 'https://rodoma.s3-ap-northeast-1.amazonaws.com/img/post/eye_catch/default.jpg',
    created_at: null,
    updated_at: null,
    likes_count: null,
    marks_count: null,
    user: user!,
    subjects: [{
      id: 0,
      post_id: 0,
      label: null,
      linked_post_id: null,
      renge_start: 0,
      renge_end: 50,
      title: 'first subject',
      description: 'description of first subject',
    }],
    allowedUsers: [],
  };

  const getPost = async (id: number) => {    
    try{
      const result = await Post.getPost(id);
      if(result.status === 'success_get_post' && result.data){
        if(user && user.id !== result.data.post.user_id) {
          history.push(`/roadmaps/${id}`);
        } else {
          contextDispatch({
            type: 'SET_IS_SAVED',
            payload: true,
          });
          contextDispatch({
            type: 'SET_POST',
            payload: result.data.post,
          }); 
          getPosts(user!.id);
          getFollowings(user!.id);
        }
      }
    } catch(error) {      
      if(error.response.data.status === 'error_no_post_exists'){
        history.push('/notFound');
        dispatch(setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error_no_post_exists,
        }));
      } else {
        dispatch(setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error,
        }));
      }
    }
  }

  const setData = (post: PostData) => {
    contextDispatch({
      type: 'SET_POST',
      payload: post,
    });
  }

  const getPosts = async (userId: number) => {    
    try{
      const result = await User.getPostsBySpecificUser(userId);
      if(result.status === 'success_get_posts' && result.data){
        contextDispatch({
          type: 'SET_POSTS',
          payload: result.data.posts,
        }); 
      }
    } catch(errro) {
      dispatch(setMessage({
        isShow: true,
        type: 'error',
        message: RESPONSE_MESSAGES.error,
      }));
    }
  }

  const getFollowings = async (userId: number) => {
    try{
      const result = await User.getFollowings(userId);
      if(result.status === 'success_get_followings' && result.data) {
        contextDispatch({
          type: 'SET_FOLLOWERS',
          payload: result.data.users,
        });
      }
    } catch (error) {
      dispatch(setMessage({
        isShow: true,
        type: 'error',
        message: RESPONSE_MESSAGES.error,
      }));
    }
  }

  useEffect(() => {
    if(state.id) {
      getPost(state.id);
    } else if (state.id === null) {  
      contextDispatch({
        type: 'SET_IS_NEW',
        payload: true,
      });
      setData(emptyPost);
      getPosts(user!.id);
      getFollowings(user!.id);
    } else {
      history.push('/notFound');
    }
  }, []);

  const props = { post: state.post };

  return <PostEditContext.Provider value={{state, contextDispatch}}><StyeldComponent { ...componentProps } { ...props } >
    </StyeldComponent>
  </PostEditContext.Provider>;
}
export default Container;