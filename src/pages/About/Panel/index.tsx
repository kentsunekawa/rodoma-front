import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Panel';

// declare types
export interface PanelData {
  title: string;
  subTitle: string;
  href: string;
  imgSrc: string;
}

interface ComponentProps {
  data: PanelData;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <a className={`${CLASSNAME} ${props.className}`} href={props.data.href}>
    <div className="image">
      <img src={props.data.imgSrc} alt="" />
    </div>
    <p className="title">
      {props.data.title}
      <span>{props.data.subTitle}</span>
    </p>
  </a>
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
