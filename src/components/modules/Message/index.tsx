import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageSelector } from 'state/modules/app';
import Styled from 'styled-components';
import * as styles from './styles';
import MessageBand from 'components/blocks/MessageBand';
import { Message } from 'types';
import { setMessage } from 'state/modules/app';
import { toggleMessage as anim_toggleMessage } from 'components/animations';

// component root class name
const CLASSNAME = 'Message';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  message: Message;
  dom: {
    root: React.Ref<HTMLDivElement>;
    counter: React.Ref<HTMLSpanElement>;
  };
  hide: () => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.root}>
    <MessageBand
      messageType={props.message.type}
      onButtonClick={props.hide}
    >
      {props.message.message}
    </MessageBand>
    <div className='counter'>
      <span ref={props.dom.counter}></span>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const message = useSelector(messageSelector);
  const dispatch = useDispatch();

  const count = 4000;
  const dom = {
    root: useRef<HTMLDivElement>(null),
    counter: useRef<HTMLSpanElement>(null),
  };
  const timer = useRef<any>(null);

  const hide = async () => {
    clearTimeout(timer.current);
    timer.current = null;
    if(dom.root.current && dom.counter.current){
      await anim_toggleMessage(dom.root.current, dom.counter.current, false);
      dispatch(setMessage({
        isShow: false,
        type: 'success',
        message: '',
      }));
    }
  }
  
  useEffect(() => {
    if(message.message) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        hide();
      }, count);
    }
  });

  if(message.message !== ''){
    if(dom.root.current && dom.counter.current) {
      anim_toggleMessage(dom.root.current, dom.counter.current, true, count / 1000);
    }
  }
  
  const props = { message, dom, hide };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;