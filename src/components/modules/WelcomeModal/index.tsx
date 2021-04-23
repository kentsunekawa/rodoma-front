import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styled from 'styled-components';
import { UserData_overview } from 'types';
import { userSelector } from 'state/modules/user';
import { setModal } from 'state/modules/app';
import Paragraph from 'components/elements/Paragraph';
import RoundButton from 'components/elements/buttons/RoundButton';
import * as styles from './styles';

// component root class name
const CLASSNAME = '';

// declare types

interface ComponentProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends ComponentProps {
  user: UserData_overview | null;
  close: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="image"></div>
    <Paragraph types={['bigTitle', 'primary']} className="title">
      Thank you
      <br />
      for your joining.
    </Paragraph>
    <Paragraph types={['catchText']} className="text">
      ご登録ありがとうございます。
      <br />
      まずは使い方をご覧になるか、
      <br />
      プロフィールを設定することを
      <br className="notPc" />
      オススメします。
    </Paragraph>
    <div className="row">
      <RoundButton
        link="/about"
        types={['gradient', 'm']}
        className="desideButton"
        onClick={props.close}
      >
        使い方を見る
      </RoundButton>
      {props.user && (
        <RoundButton
          link={`/users/${props.user.id}/edit`}
          types={['gradient', 'm']}
          className="desideButton"
          onClick={props.close}
        >
          プロフィールを設定する
        </RoundButton>
      )}
    </div>
    <div className="row">
      <RoundButton onClick={props.close} types={['m']} className="cancelButton">
        いいえ、結構です
      </RoundButton>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(setModal(''));
  };

  const props = { user, close };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
