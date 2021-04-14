import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import { isDoorShownSelector } from 'state/modules/app';

import { doorHide } from 'components/animations';
import FixedWindowHeight from 'components/modules/FixedWindowHeight';
import Logo from 'components/elements/Logo';

import * as styles from './styles';


// component root class name
const CLASSNAME = 'Door';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isAppear: boolean;
  dom: {
    root: React.Ref<HTMLDivElement>,
    logo: React.Ref<HTMLDivElement>,
  }
}

// dom component
const Component: React.FC<Props> = props => (
  <>
    <FixedWindowHeight isAppear={props.isAppear}>
      <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.root}>
        <div className='logo'>
          <div ref={props.dom.logo}>
            <Logo />
          </div>
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

  const isDoorShown = useSelector(isDoorShownSelector);
  const [isAppear, setIsAppear] = useState(isDoorShown);

  const dom = {
    root: useRef<HTMLDivElement>(null),
    logo: useRef<HTMLDivElement>(null),
  }

  const hide = async () => {
    if(dom.root.current && dom.logo.current){
      await doorHide(dom.root.current, dom.logo.current);
      setIsAppear(false);
    }
  }

  useEffect(() => {
    if(!isDoorShown) {
      hide();
    }
  }, [isDoorShown])

  const props = { dom, isAppear };

  return isAppear ? <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent> : null;
}
export default Container;