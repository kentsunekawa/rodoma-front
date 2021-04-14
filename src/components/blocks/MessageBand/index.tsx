import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconInfo, IconCheck, IconClose } from 'components/elements/icons';
import {
  MessageType
} from 'types';

// component root class name
const CLASSNAME = 'MessageBand';

// declare types

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  messageType?: MessageType;
}

interface Props extends ComponentProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="icon">
      {
        (() => {
          switch(props.messageType) {
            case 'error':
              return <IconInfo />;
            default:
              return <IconCheck />;
          }
        })()
      }
    </div>
    <div className="message">
      {props.children}
    </div>
    <div className="button">
      <CircleButton
        types={[]}
        onClick={props.onClick}
      >
        <IconClose />
      </CircleButton>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  ${({messageType}) => messageType && styles[messageType]}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { onButtonClick } = componentProps;

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onButtonClick && onButtonClick(e);
  }

  const props = { onClick };

  return <StyeldComponent { ...componentProps } { ...props }></StyeldComponent>;
}
export default Container;