import React, { useState, useEffect, useRef, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { RESPONSE_MESSAGES } from 'utils/messages';
import Comment from 'utils/request/Comment';
import { Comment as CommentType, UserData_overview } from 'types';
import { userSelector } from 'state/modules/user';
import { setMessage } from 'state/modules/app';

import InfinityScroll from 'components/modules/InfinityScroll'

import { PostContext } from '../';
import CommentInput from './CommentInput';
import CommentsList from './CommentList';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Comments';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  user: UserData_overview | null;
  postId: number | undefined;
  comments: CommentType[];
  listResetCount: number;
  isCommentPosting: boolean;
  loadingCommentIds: number[];
  getComments: (
    currentFollowers: CommentType[],
    currentOffset: number,
    cb: (count: number) => void
  ) => void;
  postComment: (comment: string) => void;
  deleteComment: (commentId: number) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className='inner'>
      <InfinityScroll
        className='scrollableArea'
        resetTriggerKeys={[props.postId, props.listResetCount]}
        list={props.comments}
        getDataFunc={props.getComments}
      >
        <CommentsList
          loadingCommentIds={props.loadingCommentIds}
          user={props.user}
          comments={props.comments}
          deleteComment={props.deleteComment}
        />
      </InfinityScroll>
      <div className='inputArea'>
        <CommentInput
          isLogin={props.user ? true : false}
          isLoading={props.isCommentPosting}
          desideComment={props.postComment}
        />
      </div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const dispatch = useDispatch();
  const {state, contextDispatch} = useContext(PostContext);
  const user = useSelector(userSelector);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [listResetCount, setListResetCount] = useState<number>(0);
  const [isCommentPosting, setIsCommentPosting] = useState<boolean>(false);
  const [loadingCommentIds, setLoadingCommentIds] = useState<number[]>([]);
  
  const isMouted = useRef<Boolean>(false);

  const getComments = async (
    currentComments: CommentType[] = [],
    currentOffset: number = 0,
    cb: (count: number) => void,
  ) => {
    if(state.id && !isCommentPosting) {
      try{
        const result = await Comment.getComments(state.id, currentOffset);
        if(result.status === 'success_get_comments' && result.data) {
          if(isMouted.current) {
            cb(result.data.query.all!);
            setComments([
              ...currentComments,
              ...result.data.comments,
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

  const deleteComment = async (commentId: number) =>{
    if(state.id && !loadingCommentIds.includes(commentId)) {
      console.log('delete');
      
      
        try{
          const ids = loadingCommentIds.slice();
          ids.push(commentId);
          setLoadingCommentIds(ids);
          const result = await Comment.deleteComment(state.id, commentId);
          if(result.status === 'success_delete_comment') {
            setListResetCount(listResetCount + 1);
            setLoadingCommentIds(loadingCommentIds.splice(loadingCommentIds.indexOf(commentId), 1));
          }
          dispatch(setMessage({
            isShow: true,
            type: 'success',
            message: RESPONSE_MESSAGES.success_delete_comment,
          }));
        } catch(error) {
          dispatch(setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.error,
          }));
        }
    } else {
      console.log('deleting');
    }
  }

  const postComment = async (comment: string) => {
    if(state.id && user) {
      try{
        setIsCommentPosting(true);
        const result = await Comment.postComment(state.id, {
          user_id: user.id,
          comment,
        });
        if(result.status === 'success_post_comment'){
          setIsCommentPosting(false);
          setListResetCount(listResetCount + 1);
        }
      } catch(error) {
        setIsCommentPosting(false);
        if(error.response.data.status === 'fail_post_comment'){
          dispatch(setMessage({
            isShow: true,
            type: 'error',
            message: RESPONSE_MESSAGES.fail_post_comment,
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
  }

  useEffect(() => {
    isMouted.current = true;
    return () => {
      isMouted.current = false;
    }
  }, [])

  const props = { user, comments, postId: state.id, listResetCount, isCommentPosting, loadingCommentIds, getComments, postComment, deleteComment };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;