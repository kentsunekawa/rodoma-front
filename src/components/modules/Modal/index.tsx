import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalSelector, setModal } from 'state/modules/app';
import Styled from 'styled-components';

import { toggleModal as anim_toggleModal } from 'components/animations';
import Overlay from 'components/elements/Overlay';
import { IconClose } from 'components/elements/icons';
import CircleButton from 'components/elements/buttons/CircleButton';


import * as styles from './styles';

// component root class name
const CLASSNAME = 'Modal';

// declare types
interface ComponentProps {
  modalName: string;
  className?: string;
  children: React.ReactNode;
}

interface Props extends ComponentProps {
  dom: {
    root: React.Ref<HTMLDivElement>;
    mask: React.Ref<HTMLDivElement>;
    overlay: React.Ref<HTMLDivElement>;
  }; 
  close: () => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.root}>
    <div className="mask" ref={props.dom.mask}>
      <div className='panel'>
        <div className='closeButton'>
          <CircleButton
            types={['s', 'gray_dark']}
            onClick={props.close}
          >
            <IconClose />
          </CircleButton>
        </div>
        <div className='inner'>
          {props.children}
        </div>
      </div>
    </div>
    <Overlay
      childRef={props.dom.overlay}
      onClick={props.close}
    />
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { modalName } = componentProps;

  const modal = useSelector(modalSelector);
  const [isAppear, setIsAppear] = useState<boolean>(modal === modalName);
  const resizeFunc = useRef<() => void>(() => {});
  
  const dispatch = useDispatch();
  

  const close = async () => {
    if(dom.root.current && dom.mask.current && dom.overlay.current){
      await anim_toggleModal(dom.root.current, dom.mask.current, dom.overlay.current, false);
      window.removeEventListener('resize', resizeFunc.current);
      setIsAppear(false);
      dispatch(setModal(''));
    }
  }

  const dom = {
    root: useRef<HTMLDivElement>(null),
    overlay: useRef<HTMLDivElement>(null),
    mask: useRef<HTMLDivElement>(null),
  }
    
  const toggleAppear = async (modal: string) => {
    if(modal === modalName){
      setIsAppear(true);  
    } else {
      if(isAppear) {
        console.log('remove');
        if(dom.root.current && dom.mask.current && dom.overlay.current){
          await anim_toggleModal(dom.root.current, dom.mask.current, dom.overlay.current, false);
        }
        console.log('remove');
        window.removeEventListener('resize', resizeFunc.current);
        setIsAppear(false);
        dispatch(setModal(''));
      }
    }
  }

  useEffect(() => {
    toggleAppear(modal);
  }, [modal]);

  useEffect(() => {
    if(isAppear) {
      if(resizeFunc.current) {
        resizeFunc.current = adjustHeight();
        window.addEventListener('resize', resizeFunc.current);
      }
      if(dom.root.current && dom.mask.current && dom.overlay.current){
        dom.root.current.style.height = `${window.innerHeight}px`;  
        anim_toggleModal(dom.root.current, dom.mask.current, dom.overlay.current, true);
      }
    }
  }, [isAppear]);

  const adjustHeight = () => () => {    
    if(dom.root.current) {
      dom.root.current.style.height = `${window.innerHeight}px`;
    }
  }

  useEffect(() => {
    return () => { 
      window.removeEventListener('resize', resizeFunc.current);
    }
  }, []);

  const props = { dom, modal, close };
  
  if(isAppear) {
    return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
  } else {
    return null;
  }
}
export default Container;