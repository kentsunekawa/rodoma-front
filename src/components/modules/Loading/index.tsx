import React, { useRef, useEffect, useState } from 'react';
import Styled from 'styled-components';

import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'state/modules/app';

import * as styles from './styles';
import { toggleLoading } from 'components/animations';
import FixedWindowHeight from 'components/modules/FixedWindowHeight';
import Logo from 'components/elements/Logo';

// component root class name
const CLASSNAME = 'Loading';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  dom: {
    root: React.Ref<HTMLDivElement>;
  };
  isLoading: boolean;
}

// dom component
const Component: React.FC<Props> = props => (
  <>
    <FixedWindowHeight isAppear={props.isLoading}>
      <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.root}>
        <div className='logo'>
          <Logo />
        </div>
      </div>
    </FixedWindowHeight>
  </>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const isLoading = useSelector(isLoadingSelector);
  const [isAppear, setIsAppear] = useState(isLoading);


  const dom = {
    root: useRef<HTMLDivElement>(null),
  }  

  const toggle = async () => {
    if(dom.root.current){ 
      await toggleLoading(dom.root.current, isLoading);
      if(!isLoading) {
        setIsAppear(false);
      }
    }
  }

  useEffect(() => {
    toggle();
  }, [isAppear]);

  useEffect(() => {
    if(isLoading) {
      setIsAppear(true);
    } else {
      toggle();
    }
  }, [isLoading]);
  
  const props = { dom, isLoading };

  return isAppear ? <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent> : null;
}
export default Container;