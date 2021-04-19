import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { IconSearch } from 'components/elements/icons';

// component root class name
const CLASSNAME = 'SearchKeyword';

// declare types
interface ComponentProps {
  className?: string;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// dom component
const Component: React.FC<ComponentProps> = (props: ComponentProps) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <input
      type="text"
      placeholder={props.placeholder}
      className="input"
      value={props.value}
      onChange={props.onChange}
    />
    <button className="button" onClick={props.onClick}>
      <div className="icon">
        <IconSearch />
      </div>
    </button>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  return <StyeldComponent {...componentProps}></StyeldComponent>;
};

export default Container;
