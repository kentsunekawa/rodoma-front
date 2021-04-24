import React from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PostData_overview } from 'types';
import { createCategoryTagList, RELEASE_STATUS } from 'utils';
import { categoryTreeSelector } from 'state/modules/app';

import UserBlock from 'components/blocks/UserBlock';
import Paragraph from 'components/elements/Paragraph';
import StatusCounter from 'components/elements/StatusCounter';
import CircleButton from 'components/elements/buttons/CircleButton';
import TagList from 'components/blocks/TagList';
import Tag from 'components/blocks/TagList/Tag';
import { IconClose, IconEdit, IconMinus } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostBox';

// declare types
interface ComponentProps {
  post: PostData_overview;
  editable?: boolean;
  statusVisible?: boolean;
  className?: string;
  onDelete?: (id: number) => void;
  onRemove?: (id: number) => void;
}

interface Props extends ComponentProps {
  tabTextList: string[];
  onClickDeleteButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickRemoveButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="nav">
      {props.onDelete && (
        <CircleButton onClick={props.onClickDeleteButton} types={['gray_dark', 'xs']}>
          <IconClose />
        </CircleButton>
      )}
      {props.editable && (
        <Link to={`/roadmaps/${props.post.id}/edit`}>
          <CircleButton types={['gray_dark', 'xs']}>
            <IconEdit />
          </CircleButton>
        </Link>
      )}
      {props.onRemove && (
        <CircleButton onClick={props.onClickRemoveButton} types={['gray_dark', 'xs']}>
          <IconMinus />
        </CircleButton>
      )}
    </div>
    <Link className="link" to={`/roadmaps/${props.post.id}`}>
      {props.statusVisible && (
        <div className="status">
          <Tag value={RELEASE_STATUS[props.post.release_status]} types={['gradient', 's']} />
        </div>
      )}
      <div className="imageArea">
        <div
          className="image"
          style={{ backgroundImage: `url(${props.post.eye_catch_url})` }}
        ></div>
      </div>

      <div className="info">
        <Paragraph className="title" types={['semiBold']}>
          {props.post.title}
        </Paragraph>
        <div className="status">
          <StatusCounter StatusType="like" num={props.post.likes_count} />
          <StatusCounter StatusType="mark" num={props.post.marks_count} />
        </div>
        <div className="user">
          <UserBlock
            userName={props.post.user.name}
            icon_url={props.post.user.icon_url}
            types={['s', 'iconRight']}
          />
        </div>
      </div>
    </Link>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { onDelete, onRemove, post } = componentProps;

  const categoryTree = useSelector(categoryTreeSelector);
  const tabTextList = createCategoryTagList(post.category_id, post.specialty_id, categoryTree);

  const onClickDeleteButton = () => {
    onDelete && onDelete(post.id);
  };

  const onClickRemoveButton = () => {
    onRemove && onRemove(post.id);
  };

  const props = {
    tabTextList,
    onClickDeleteButton,
    onClickRemoveButton,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
