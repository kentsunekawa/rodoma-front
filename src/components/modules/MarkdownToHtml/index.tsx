import React from 'react';
import Styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'MarkdownToHtml';

// declare types

interface ComponentProps {
  className?: string;
  children: string;
}

interface Props extends ComponentProps {
  children: string;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ReactMarkdown plugins={[gfm]}>{props.children}</ReactMarkdown>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  return <StyeldComponent {...componentProps}>{componentProps.children}</StyeldComponent>;
};
export default Container;
