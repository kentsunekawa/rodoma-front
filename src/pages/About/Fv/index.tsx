import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Fv';

// declare types
interface ComponentProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="bg"></div>
    <div className="overlay"></div>
    <h1 className="title">
      <span className="name">
        rodoma<span>（ロドマ）</span>
      </span>
      は
      <br className="notPc" />
      挑戦する人を応援する、
      <br />
      学習ロードマップの
      <br className="notPc" />
      シェアサービスです
    </h1>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const props = {};

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
