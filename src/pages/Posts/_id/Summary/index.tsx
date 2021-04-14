import React, { useContext } from 'react';
import Styled from 'styled-components';

import { PostData } from 'types';

import MarkdownToHtml from 'components/modules/MarkdownToHtml';
import Paragraph from 'components/elements/Paragraph';

import { PostContext } from '../';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostSummary';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  post: PostData | undefined | null;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className='inner'>
      <div className='title'>
        {
          props.post && <Paragraph types={['text', 'bold']}>
            {props.post.title}
          </Paragraph>
        }
      </div>
      {
        props.post && <MarkdownToHtml>
          {props.post.description}
        </MarkdownToHtml>
      }
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const {state, contextDispatch} = useContext(PostContext);

  const props = { post: state.post };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;