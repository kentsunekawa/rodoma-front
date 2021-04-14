import React from 'react';
import Styled from 'styled-components';

import { Subject } from 'types';

import MarkdownToHtml from 'components/modules/MarkdownToHtml';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconLink } from 'components/elements/icons';
import Paragraph from 'components/elements/Paragraph'

import * as styles from './styles';

// component root class name
const CLASSNAME = 'Subject';

// declare types
interface ComponentProps {
  subject: Subject;
  className?: string;
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {
      props.subject.linked_post_id && <CircleButton types={['s', 'gray_midium']} className='link' link={`/roadmaps/${props.subject.linked_post_id}`}>
        <IconLink />
      </CircleButton>
    }
    
    <div className='title'>
      <Paragraph types={['title']}>
        {props.subject.title}
      </Paragraph>
    </div>
    <div className='main'>
      <MarkdownToHtml>{props.subject.description}</MarkdownToHtml>
    </div>
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