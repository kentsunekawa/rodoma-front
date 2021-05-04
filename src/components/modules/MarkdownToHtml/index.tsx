import React, { useRef, useEffect } from 'react';
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
  wrapper: React.Ref<HTMLDivElement>;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.wrapper}>
    <ReactMarkdown plugins={[gfm]}>{props.children}</ReactMarkdown>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const props = { wrapper };

  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.querySelectorAll('a').forEach((a) => {
        a.setAttribute('target', '_blank');
      });
    }
  }, []);

  return (
    <StyeldComponent {...componentProps} {...props}>
      {componentProps.children}
    </StyeldComponent>
  );
};
export default Container;
