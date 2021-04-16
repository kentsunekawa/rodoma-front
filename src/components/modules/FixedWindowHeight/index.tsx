import React, { useRef, useEffect } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'FixedWindowHeight';

// declare types
interface ComponentProps {
  isAppear: boolean;
  className?: string;
}

interface Props extends ComponentProps {
  children: React.ReactNode;
  dom: {
    root: React.Ref<HTMLDivElement>;
  };
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.root}>
    {props.children}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { isAppear } = componentProps;
  const resizeFunc = useRef<() => void>(() => {
    return;
  });
  const dom = {
    root: useRef<HTMLDivElement>(null),
  };

  const adjustHeight = () => () => {
    console.log('resize');
    if (dom.root.current) {
      dom.root.current.style.height = `${window.innerHeight}px`;
    }
  };

  useEffect(() => {
    if (dom.root.current) {
      dom.root.current.style.height = `${window.innerHeight}px`;
    }
    resizeFunc.current = adjustHeight();
    window.addEventListener('resize', resizeFunc.current);
    return () => {
      window.removeEventListener('resize', resizeFunc.current);
    };
  }, [isAppear]);

  const props = { dom };

  return (
    <StyeldComponent {...componentProps} {...props}>
      {componentProps.children}
    </StyeldComponent>
  );
};
export default Container;
