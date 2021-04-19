import React, { useContext } from 'react';
import Styled from 'styled-components';

import CircleButton from 'components/elements/buttons/CircleButton';
import {
  IconMark,
  IconMarkFill,
  IconLike,
  IconLikeFill,
  IconLoading,
} from 'components/elements/icons';

import { PostContext, RelationStatus } from '../index';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostNav';

type ButtonTypes = 'mark' | 'like';

// declare types
interface ComponentProps {
  toggleFuncs: (type: 'like' | 'mark') => void;
  className?: string;
}

interface Props extends ComponentProps {
  status: RelationStatus | undefined;
  clickButton: (type: ButtonTypes) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <CircleButton
      onClick={() => props.clickButton('mark')}
      types={['m', 'gray_midium']}
      className={`button -mark${props.status?.mark ? ' -active' : ''}`}
    >
      {props.status?.mark !== null ? (
        <>
          {props.status?.mark ? (
            <>{props.status?.mark ? <IconMarkFill /> : <IconMark />}</>
          ) : (
            <IconMark />
          )}
        </>
      ) : (
        <IconLoading />
      )}
    </CircleButton>
    <CircleButton
      onClick={() => props.clickButton('like')}
      types={['m', 'gray_midium']}
      className={`button -like${props.status?.like ? ' -active' : ''}`}
    >
      {props.status?.like !== null ? (
        <>{props.status?.like ? <IconLikeFill /> : <IconLike />}</>
      ) : (
        <IconLoading />
      )}
    </CircleButton>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { toggleFuncs } = componentProps;

  const { state, contextDispatch } = useContext(PostContext);
  // const isMounted = useRef<boolean>(false);

  const clickButton = (type: ButtonTypes) => {
    if (state.relationStatus && state.relationStatus[type] !== null) {
      contextDispatch({
        type: 'SET_RELATION_STATUS',
        payload: {
          ...state.relationStatus,
          [type]: null,
        },
      });
      toggleFuncs(type);
    }
  };

  const props = {
    status: state.relationStatus,
    clickButton,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
