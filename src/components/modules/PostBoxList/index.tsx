import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { PostData_overview } from 'types';
import PostBox from './PostBox';

// component root class name
const CLASSNAME = 'PostBoxList';

// declare types
interface ComponentProps {
  posts: PostData_overview[];
  statusVisible?: boolean;
  editable?: boolean;
  className?: string;
  onDelete?: (id: number) => void;
  onRemove?: (id: number) => void;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.posts.map((post, i) => {
        return (
          <li className="item" key={i} data-id={post.id}>
            <PostBox
              className="postBox"
              post={post}
              statusVisible={props.statusVisible}
              editable={props.editable}
              onDelete={props.onDelete}
              onRemove={props.onRemove}
            />
          </li>
        );
      })}
    </ul>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = ({ ...ComponentProps }: ComponentProps) => {
  return <StyeldComponent {...ComponentProps}></StyeldComponent>;
};
export default Container;
