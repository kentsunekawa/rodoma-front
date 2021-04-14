import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

import { isDoorShownSelector } from 'state/modules/app';

import CoverContent from 'components/modules/CoverContent';
import Logo from 'components/elements/Logo';
import Paragraph from 'components/elements/Paragraph';
import TextButton from 'components/elements/buttons/TextButton';
import { IconRight } from 'components/elements/icons';
import CircleCounter from 'components/elements/CircleCounter';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Intro';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  countSeconed: number;
  isCountStart: boolean;
  skip: () => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <TextButton
      className='skipButton'
      link='/signInOrUp'
      types={['withIconRight']}
      icon={<IconRight />}
    >
      Skip
    </TextButton>
    <CoverContent>
      
      <div className='inner'>
        <div className='logo'>
          <Logo type='gradient' />
        </div>
        <div className='text'>
          <Paragraph types={['center', 'subTitle']}>
            サービスの説明が入りますサービスの説明が入りますサービスの説明が入りますサービスの説明が入りますサービスの説明が入りますサービスの説明が入ります
          </Paragraph>
        </div>
        <div className='counter'>
          <CircleCounter
            isStart={props.isCountStart}
            num={props.countSeconed}
            types={['primary']}
          />
        </div>
      </div>
    </CoverContent>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const countSeconed = 10;

  const history = useHistory();
  const [isCountStart, setIsCountStart] = useState(false);
  const isDoorShow = useSelector(isDoorShownSelector);

  useEffect(() => {
    if(!isDoorShow) {      
      setTimeout(() => {
        history.push('/signInOrUp');
      }, countSeconed * 1000);
      setIsCountStart(true); 
    }
  }, [isDoorShow]);

  const skip = (() => {
    history.push('/signInOrUp');
  });

  const props = { countSeconed, isCountStart, skip };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;