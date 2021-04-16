import React, { useState } from 'react';
import Styled from 'styled-components';

import CircleButton from 'components/elements/buttons/CircleButton';
import RoundButton from 'components/elements/buttons/RoundButton';
import TextArea from 'components/elements/inputs/TextArea';
import Paragraph from 'components/elements/Paragraph';
import { IconComment, IconLoading } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'CommentInput';

// declare types

interface ComponentProps {
  isLogin: boolean;
  isLoading: boolean;
  className?: string;
  desideComment: (comment: string) => void;
}

interface Props extends ComponentProps {
  comment: string;
  changeComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  deside: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {props.isLogin ? (
      <div className="inner">
        <TextArea
          value={props.comment}
          height={70}
          onChange={props.changeComment}
          placeholder="comment here..."
          types={['s', 'noBorder']}
        ></TextArea>
        <CircleButton
          types={props.comment === '' && !props.isLoading ? ['l', 'gray_light'] : ['l', 'gradient']}
          onClick={props.deside}
        >
          {props.isLoading ? <IconLoading /> : <IconComment />}
        </CircleButton>
      </div>
    ) : (
      <RoundButton link="/signInOrUp" types={['l', 'gradient']}>
        <Paragraph types={['text', 'nega']}>サインインしてコメントを残しましょう</Paragraph>
      </RoundButton>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { desideComment, isLoading } = componentProps;

  const [comment, setComment] = useState<string>('');

  const changeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const deside = () => {
    if (comment !== '' && !isLoading) {
      desideComment(comment);
      setComment('');
    }
  };

  const props = { comment, changeComment, deside };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
