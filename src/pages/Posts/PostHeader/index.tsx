import React from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';

import { PostData } from 'types';
import { createCategoryTagList, RELEASE_STATUS } from 'utils';
import { categoryTreeSelector } from 'state/modules/app';

import UserBlock from 'components/blocks/UserBlock';
import TagList from 'components/blocks/TagList';
import Paragraph from 'components/elements/Paragraph';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconEdit } from 'components/elements/icons';
import { StyleType } from 'components/blocks/TagList/Tag';

import PostEditStatus from '../_id/Edit/PostCreator/PostEditStatus';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostHeader';

// declare types

interface ComponentProps {
  isSaved?: boolean;
  isAuthor?: boolean;
  editable?: boolean;
  post: PostData;
  className?: string;
  onTitleClick?: () => void;
}

interface Props extends ComponentProps {
  tabTextList: string[];
  postStatusList: {
    types: StyleType[];
    value: string;
  }[];
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="inner">
      <div className="info" onClick={props.onTitleClick && props.onTitleClick}>
        {props.isAuthor && (
          <CircleButton
            types={['xs', 'gray_dark']}
            link={`/roadmaps/${props.post.id}/edit`}
            className="linkToEdit"
          >
            <IconEdit />
          </CircleButton>
        )}
        <Paragraph className="title" types={['subTitle']}>
          {props.post.title}
        </Paragraph>
        <TagList
          tagTypes={['gradient']}
          types={['alignLeft']}
          values={props.tabTextList}
          // maxLength={7}
        />
      </div>
      <div className="iconArea">
        {props.editable ? (
          <PostEditStatus
            isSaved={props.isSaved ? true : false}
            eyeCatchUrl={props.post.eye_catch_url}
            postStatusList={props.postStatusList}
          />
        ) : (
          <UserBlock
            linkable={!props.editable}
            userId={props.post.user.id}
            userName={props.post.user.name}
            icon_url={props.post.user.icon_url}
            types={['alignCenter', 'm']}
          />
        )}
      </div>
      {props.post.created_at && props.post.updated_at && (
        <div className="date">
          作成日: {props.post.created_at.split(' ')[0]} / 更新日:{' '}
          {props.post.updated_at.split(' ')[0]}
        </div>
      )}
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { post, isSaved } = componentProps;

  const categoryTree = useSelector(categoryTreeSelector);
  const tabTextList = createCategoryTagList(post.category_id, post.specialty_id, categoryTree);

  const postStatusList = (() => {
    return [
      {
        types: isSaved ? ['success'] : ['error'],
        value: isSaved ? '保存済' : '未保存',
      },
      {
        types: post.release_status === 0 ? [] : ['success'],
        value: RELEASE_STATUS[post.release_status],
      },
    ];
  })() as {
    types: StyleType[];
    value: string;
  }[];

  const props = { tabTextList, postStatusList };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
