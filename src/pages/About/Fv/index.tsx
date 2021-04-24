import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import { isDoorShownSelector } from 'state/modules/app';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Fv';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  isTitleShow: boolean;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="bg"></div>
    <div className="overlay"></div>
    <h1 className={`title${props.isTitleShow ? ' -show' : ''}`}>
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
  const isDoorShown = useSelector(isDoorShownSelector);
  const [isTitleShow, setIsTitleShow] = useState<boolean>(false);

  useEffect(() => {
    setIsTitleShow(!isDoorShown);
  }, [isDoorShown]);

  const props = { isTitleShow };
  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
