import { IconLoading } from 'components/elements/icons';
import React from 'react';
import Styled from 'styled-components';

import { Comment as CommentType, UserData_overview } from 'types';

import Comment from './Comment';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'CommentList';

// declare types
interface ComponentProps {
  loadingCommentIds: number[];
  user: UserData_overview | null;
  comments: CommentType[];
  className?: string;
  deleteComment: (id: number) => void;
}

interface Props extends ComponentProps {
  onClick: (id: number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {props.comments.map((comment, i) => {
      return (
        <div
          className={`comment${props.user && props.user.id === comment.user.id ? ' -login' : ''}`}
          key={i}
        >
          {props.loadingCommentIds.includes(comment.id) && (
            <div className="loading">
              <IconLoading />
            </div>
          )}
          <Comment
            user={comment.user}
            created_at={comment.created_at}
            id={comment.id}
            isLogin={props.user && props.user.id === comment.user.id ? true : false}
            onClick={props.onClick}
          >
            {comment.comment}
          </Comment>
        </div>
      );
    })}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { deleteComment } = componentProps;

  const onClick = (id: number) => {
    deleteComment(id);
  };

  const props = { onClick };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
