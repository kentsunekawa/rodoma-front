import React, { useState, useEffect, useRef } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'CircleCounter';

// declare types

interface ComponentProps {
  isStart: boolean;
  num: number;
  className?: string;
}

interface Props extends ComponentProps {
  count: number;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className={`circle${props.isStart && ' -started'}`}></div>
    <span>{props.count}</span>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { isStart, num } = componentProps;

  const [count, setCount] = useState(num);
  const refCount = useRef(num);
  const timer = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (isStart) {
      timer.current = setInterval(() => {
        if (refCount.current === 0) {
          if (timer.current) {
            clearInterval(timer.current);
          }
          timer.current = null;
          setCount(0);
        }
        if (refCount.current) {
          setCount(--refCount.current);
        }
      }, 1000);
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [isStart]);

  const props = { count };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
