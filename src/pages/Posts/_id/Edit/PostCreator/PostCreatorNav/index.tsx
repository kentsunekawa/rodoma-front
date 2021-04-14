import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { setModal } from 'state/modules/app';

import RoundButton from 'components/elements/buttons/RoundButton';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconTrash } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostCreatorNav';

// declare types

interface ComponentProps {
  isNew: boolean;
  className?: string;
  save: () => void;
}

interface Props extends ComponentProps {
  deleteConfirm: () => void;
  releaseConfirm: () => void;
  finishConfirm: () => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {
      !props.isNew && <CircleButton
        types={['m', 'gray_dark']}
        onClick={props.deleteConfirm}
        className='button'
      >
        <IconTrash />
      </CircleButton>
    }
    <RoundButton
      types={['m']}
      onClick={props.finishConfirm}
      className='button'
    >
      終了する
    </RoundButton>
    <RoundButton
      types={['m']}
      onClick={props.save}
      className='button'
    >
      保存する
    </RoundButton>
    <RoundButton
      types={['m', 'gradient']}
      onClick={props.releaseConfirm}
      className='button'
    >
      公開する
    </RoundButton>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const dispatch = useDispatch();

  const finishConfirm = () => {
    dispatch(setModal('postEditFinish'));
  }

  const releaseConfirm = () => {
    dispatch(setModal('postEditRelease'));
  }

  const deleteConfirm = () => {
    dispatch(setModal('postDelete'));
  }

  const props = { finishConfirm, releaseConfirm, deleteConfirm };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;