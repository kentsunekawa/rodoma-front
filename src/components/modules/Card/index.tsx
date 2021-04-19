import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { Mode } from 'types';
import { cardSelector, modeSelector, setCard } from 'state/modules/app';

import Overlay from 'components/elements/Overlay';
import CircleButton from 'components/elements/buttons/CircleButton';
import IconClose from 'components/elements/icons/IconClose';

import { toggleCard as anim_toggleCard } from 'components/animations/';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Card';

// declare types

interface ComponentProps {
  cardName: string;
  className?: string;
}

interface Props extends ComponentProps {
  children: React.ReactNode;
  dom: {
    [key: string]: React.Ref<HTMLDivElement>;
  };
  mode: Mode;
  close: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.root}>
    <div className="panel" ref={props.dom.panel}>
      <CircleButton className="close" onClick={props.close} types={['s', 'gray_midium']}>
        <IconClose />
      </CircleButton>
      <div className="inner">{props.children}</div>
    </div>
    <Overlay onClick={props.close} childRef={props.dom.overlay} />
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const { cardName } = componentProps;
  const card = useSelector(cardSelector);
  const mode = useSelector(modeSelector);

  const dom = {
    root: useRef<HTMLDivElement>(null),
    panel: useRef<HTMLDivElement>(null),
    overlay: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    if (dom.root.current && dom.panel.current && dom.overlay.current) {
      anim_toggleCard(dom.root.current, dom.panel.current, dom.overlay.current);
    }
  });

  const close = async () => {
    if (dom.root.current && dom.panel.current && dom.overlay.current) {
      await anim_toggleCard(dom.root.current, dom.panel.current, dom.overlay.current, false);
      dispatch(setCard(''));
    }
  };

  if (card !== cardName) {
    return null;
  }

  const props = { dom, mode, close };

  return (
    <StyeldComponent {...componentProps} {...props}>
      {componentProps.children}
    </StyeldComponent>
  );
};
export default Container;
