import React, { useState } from 'react';
import Styled from 'styled-components';

import CircleButton from 'components/elements/buttons/CircleButton';
import { IconClose } from 'components/elements/icons';


import * as styles from './styles';

// component root class name
const CLASSNAME = 'Error';

// declare types
type StyleType = 'bottom' | 'nega';

interface ComponentProps {
  messages?: string[];
  className?: string;
  types?: StyleType[];
}

interface Props extends ComponentProps {
  toggleShow: () => void;
  isShow: boolean;
}

// dom component
const Component: React.FC<Props> = props => (
  <>
    {props.children}
    {props.messages && props.messages.length > 0
      ? <div className={`${CLASSNAME} ${props.className}`}>
        <p className='text'>※入力内容に誤りがあります<button onClick={props.toggleShow}>詳細</button></p>
        {
          props.isShow && <div className='box'>
            {
              props.messages.map((message, i) => {
                return message && <span key={i} className='message'>{message}</span>;
              })
            }
            <CircleButton types={['s', 'gray_dark']} onClick={props.toggleShow} className='close'>
              <IconClose />
            </CircleButton>
          </div>
        }
      </div>
      : null
    }
  </>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({types}) => types && types.map(type => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const [isShow, setIsShow] = useState<boolean>(false);

  const toggleShow = () => {
    setIsShow(isShow ? false : true);
  };

  const props = { isShow, toggleShow };

  return <StyeldComponent { ...componentProps } { ...props }></StyeldComponent>;
}
export default Container;