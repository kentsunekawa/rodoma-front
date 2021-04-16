import React, { useContext } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { TabChengerConext } from '../index';

// component root class name
const CLASSNAME = 'Tab';

// declare types
interface ComponentProps {
  children: React.ReactElement;
  className?: string;
  onChange?: (i: number) => void;
}

interface Props extends ComponentProps {
  children: React.ReactElement;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>{props.children}</div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { children, onChange } = componentProps;

  const { state, dispatch } = useContext(TabChengerConext);

  const selectedChange = (i: number) => {
    dispatch({
      type: 'CHANGE_SELECTED',
      payload: i,
    });
    onChange && onChange(i);
  };

  const clone = React.cloneElement(children, {
    onChange: selectedChange,
    selected: state.selected,
  });

  return <StyeldComponent {...componentProps}>{clone}</StyeldComponent>;
};
export default Container;
