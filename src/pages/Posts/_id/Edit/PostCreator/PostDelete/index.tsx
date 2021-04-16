import React from 'react';
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { setModal } from 'state/modules/app';

import RoundButton from 'components/elements/buttons/RoundButton';
import TextButton from 'components/elements/buttons/TextButton';
import Paragraph from 'components/elements/Paragraph';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostDelete';

// declare types

interface ComponentProps {
  deletePost: () => void;
  className?: string;
}

interface Props extends ComponentProps {
  cancel: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="row">
      <Paragraph>削除してもよろしいですか？</Paragraph>
    </div>
    <div className="row">
      <RoundButton onClick={props.deletePost} types={['gradient', 'l']} className="desideButton">
        OK
      </RoundButton>
    </div>
    <div className="row">
      <TextButton onClick={props.cancel} types={['primary']}>
        キャンセル
      </TextButton>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();

  const cancel = () => {
    dispatch(setModal(''));
  };

  const props = { cancel };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
