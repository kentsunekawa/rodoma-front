import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';

import { UserData_overview } from 'types';

import UserBlock from 'components/blocks/UserBlock';
import { IconMinus } from 'components/elements/icons';

// component root class name
const CLASSNAME = 'UsersList';

// declare types
interface ComponentProps {
  users: UserData_overview[];
  className?: string;
  onRemove?: (id: number) => void;
}

interface Props extends ComponentProps {
  onClickRemoveButton: (id: number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className="list">
      {props.users.map((user, i) => {
        return (
          <li className="item" key={i} data-id={user.id}>
            <UserBlock
              linkable
              userId={user.id}
              userName={user.name}
              icon_url={user.icon_url}
              className="block"
              types={['alignCenter', 'l']}
              onButtonClick={props.onRemove && (() => props.onClickRemoveButton(user.id))}
              buttonIcon={<IconMinus />}
            />
          </li>
        );
      })}
    </ul>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { onRemove } = componentProps;

  const onClickRemoveButton = (id: number) => {
    onRemove && onRemove(id);
  };

  const props = {
    onClickRemoveButton,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
