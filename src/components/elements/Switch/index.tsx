import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Switch';

// declare types
type StyleType = 'primary';

interface ComponentProps {
  isChecked: boolean;
  className?: string;
  types?: StyleType[];
  onChange: (value: boolean) => void;
}

interface Props extends ComponentProps {
  change: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <label>
      <input type="checkbox" onChange={props.change} checked={props.isChecked} />
      <div className="rail">
        <span></span>
        <div className="bg"></div>
      </div>
    </label>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  // extended styles
  ${({ types }) => types && types.map((type) => styles[type])}}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { isChecked, onChange } = componentProps;

  // const [localIsChecked, setLocalIsChecked] = useState(isChecked);

  const change = () => {
    onChange(isChecked ? false : true);
  };

  const props = { change };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
