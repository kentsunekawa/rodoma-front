import React from 'react';
import Styled from 'styled-components';

import Tag, { StyleType } from 'components/blocks/TagList/Tag';
import { IconCheck, IconInfo } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostEditStatus';

// declare types

interface ComponentProps {
  isSaved: boolean;
  eyeCatchUrl: string;
  postStatusList: {
    types: StyleType[];
    value: string;
  }[];
  className?: string;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <Tag
      types={props.postStatusList[0].types}
      value={props.postStatusList[0].value}
      icon={props.isSaved ? <IconCheck /> : <IconInfo />}
    />
    <Tag
      types={props.postStatusList[1].types}
      value={props.postStatusList[1].value}
    />
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const props = {};

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;