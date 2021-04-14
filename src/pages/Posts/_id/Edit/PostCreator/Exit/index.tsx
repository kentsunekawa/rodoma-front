import React from 'react';
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { setModal } from 'state/modules/app';

import RoundButton from 'components/elements/buttons/RoundButton';
import TextButton from 'components/elements/buttons/TextButton';
import Paragraph from 'components/elements/Paragraph';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Exit';

// declare types

interface ComponentProps {
  exit: (isSave?: boolean) => void;
  className?: string;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className='row'>
      <Paragraph>
        終了しますか？
      </Paragraph>
    </div>
    <div className='row'>
      <RoundButton
        onClick={() => props.exit(true)}
        types={['gradient', 'l']}
        className='desideButton'
      >
        保存して終了
      </RoundButton>
    </div>
    <div className='row'>
      <TextButton onClick={() => props.exit()} types={['primary']}>
        保存せずに終了
      </TextButton>
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

  const cancel = () => {
    dispatch(setModal(''));
  }

  const props = { cancel };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;