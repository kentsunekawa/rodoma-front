import React from 'react';
import Styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'MarkdownToHtml';

// declare types

interface ComponentProps {
  className?: string;
  children: string;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div
    className={`${CLASSNAME} ${props.className}`}
  >
    <ReactMarkdown>
      {props.children}
    </ReactMarkdown>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const props = {};

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;