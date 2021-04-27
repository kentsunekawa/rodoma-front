import React, { useRef } from 'react';
import { UserData_overview } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { isMenuOpenSelector, toggleMenu } from 'state/modules/app';
import Styled from 'styled-components';
import * as styles from './styles';
import { toggleMenu as anim_toggleMenu } from 'components/animations';
import CircleButton from 'components/elements/buttons/CircleButton';
import Overlay from 'components/elements/Overlay';
import { IconClose } from 'components/elements/icons';
import MenuContent from './MenuContent';
import ModeChanger from 'components/blocks/ModeChanger';
import { userSelector } from 'state/modules/user';

// component root class name
const CLASSNAME = 'Menu';

// declare types

export interface ComponentProps {
  className?: string;
}

interface Dom {
  root: React.Ref<HTMLDivElement>;
  panel: React.Ref<HTMLDivElement>;
  overlay: React.Ref<HTMLDivElement>;
}

interface Props extends ComponentProps {
  user: UserData_overview | null;
  close: () => void;
  dom: Dom;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.root}>
    <div className="panel" ref={props.dom.panel}>
      <div className="header">
        <ModeChanger />
        <CircleButton onClick={props.close}>
          <IconClose />
        </CircleButton>
      </div>
      <div className="inner">
        <MenuContent user={props.user} closeFunc={props.close} />
      </div>
    </div>
    <Overlay childRef={props.dom.overlay} onClick={props.close} />
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps: ComponentProps) => {
  const isOpen = useSelector(isMenuOpenSelector);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const dom = {
    root: useRef<HTMLDivElement>(null),
    panel: useRef<HTMLDivElement>(null),
    overlay: useRef<HTMLDivElement>(null),
  };

  const close = () => {
    dispatch(toggleMenu(false));
  };

  if (dom.root.current && dom.panel.current && dom.overlay.current) {
    if (isOpen) {
      anim_toggleMenu(dom.root.current, dom.panel.current, dom.overlay.current);
    } else {
      anim_toggleMenu(dom.root.current, dom.panel.current, dom.overlay.current, false);
    }
  }

  const props = { close, user, dom };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
