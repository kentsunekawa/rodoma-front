import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';

import {
  isSearchPanelOpenSelector,
  isMenuOpenSelector,
  isCoverSelector,
  modalSelector,
  cardSelector,
} from 'state/modules/app';

// component root class name
const CLASSNAME = 'FixWindow';

// declare types

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

interface Props extends ComponentProps {
  ref?: React.Ref<HTMLDivElement>;
}

// dom component
const Component: React.FC<Props> = React.forwardRef(function Child(props: Props, ref) {
  return (
    <div className={`${CLASSNAME} ${props.className}`} ref={ref}>
      {props.children}
    </div>
  );
});

// styled component
const StyeldComponent = Styled(Component)`
  width: 100%;
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const isSearchPanelOpen = useSelector(isSearchPanelOpenSelector);
  const isMenuOpen = useSelector(isMenuOpenSelector);
  const isCover = useSelector(isCoverSelector);
  const isCardOpen = useSelector(cardSelector);
  const modal = useSelector(modalSelector);

  const dom = useRef<HTMLDivElement>(null);
  const isFixed = useRef<boolean>(false);
  const posi = useRef<number>(window.pageYOffset);

  if (isSearchPanelOpen || isMenuOpen || modal || isCardOpen || isCover) {
    if (!isFixed.current) {
      isFixed.current = true;
      posi.current = window.pageYOffset;
      if (dom.current) {
        dom.current.style.top = `-${posi.current}px`;
        dom.current.style.position = 'fixed';
      }
    }
  } else {
    if (dom.current) {
      isFixed.current = false;
      dom.current.style.position = 'static';
      window.scrollTo(0, posi.current);
    }
  }

  return (
    <StyeldComponent {...componentProps} ref={dom}>
      {componentProps.children}
    </StyeldComponent>
  );
};
export default Container;
