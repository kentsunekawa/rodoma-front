import React, { useState, useRef } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import TextButton from 'components/elements/buttons/TextButton';
import Paragraph from 'components/elements/Paragraph';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconUp, IconDown } from 'components/elements/icons';
import { toggleAccordion } from 'components/animations';

// component root class name
const CLASSNAME = 'Accordion';

// declare types
type StyleType = 'nega';

interface ComponentProps {
  isOpen?: boolean;
  parent: {
    id: number;
    name: string;
  };
  childList: {
    id: number;
    name: string;
  }[];
  onClick: (parentId: number, childId?: number) => void;
  className?: string;
  types?: StyleType[];
}

interface Props extends ComponentProps {
  localIsOpen: boolean;
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dom: {
    child: React.Ref<HTMLDivElement>;
    inner: React.Ref<HTMLDivElement>;
  };
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="parent">
      <TextButton onClick={() => props.onClick(props.parent.id)}>
        <Paragraph types={props.types}>{props.parent.name}</Paragraph>
      </TextButton>
      <CircleButton onClick={props.toggle} types={['outline', 's']}>
        {props.localIsOpen ? <IconUp /> : <IconDown />}
      </CircleButton>
    </div>

    <div className={`child${props.localIsOpen ? ' -open' : ''}`} ref={props.dom.child}>
      <div className="inner" ref={props.dom.inner}>
        <ul className="list">
          {props.childList.map((child, i) => {
            return (
              <li className="item" key={i}>
                <TextButton onClick={() => props.onClick(props.parent.id, child.id)}>
                  <Paragraph types={props.types}>{child.name}</Paragraph>
                </TextButton>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { isOpen } = componentProps;

  const [localIsOpen, setLocalIsOpen] = useState(isOpen ? true : false);

  const dom = {
    child: useRef<HTMLDivElement>(null),
    inner: useRef<HTMLDivElement>(null),
  };

  const toggle = () => {
    if (dom.child.current && dom.inner.current) {
      toggleAccordion(dom.child.current, dom.inner.current, !localIsOpen);
    }
    setLocalIsOpen(localIsOpen ? false : true);
  };

  const props = { localIsOpen, toggle, dom };

  return <StyeldComponent {...componentProps} {...props} />;
};
export default Container;
