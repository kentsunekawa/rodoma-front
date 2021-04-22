import React, { useState, useEffect, useRef } from 'react';
import Styled from 'styled-components';
import { fvChange } from 'components/animations';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconReload } from 'components/elements/icons';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Fv';

// declare types
interface Message {
  title: string;
  subTitle: string;
  name: string;
  image: string;
}

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  messages: Message[];
  num: number;
  titleArea: React.Ref<HTMLDivElement>;
  bg: React.Ref<HTMLDivElement>;
  change: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="overlay"></div>
    <div className="bg" ref={props.bg}>
      {props.messages.map((message, i) => {
        return (
          <span
            style={{ backgroundImage: `url(${message.image})` }}
            key={i}
            className={i === props.num ? '-active' : ''}
          ></span>
        );
      })}
    </div>
    <div className="titleArea" ref={props.titleArea}>
      <div className="title">
        <p dangerouslySetInnerHTML={{ __html: props.messages[props.num].title }}></p>
        <span dangerouslySetInnerHTML={{ __html: props.messages[props.num].subTitle }}></span>
      </div>
      <p className="name">{props.messages[props.num].name}</p>
    </div>
    <CircleButton className="changeButton" onClick={props.change} types={[]}>
      <IconReload />
    </CircleButton>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const messages: Message[] = [
    {
      title: '"BEYOND" must be beautiful.',
      subTitle: 'その先は美しいに違いない',
      name: 'unknown',
      image: '/img/fvBg_01.jpg',
    },
    {
      title: 'Change before you have to.',
      subTitle: '変革せよ。変革を迫られる前に。',
      name: 'Jack Welch',
      image: '/img/fvBg_02.jpg',
    },
    {
      title: 'If you can dream it, you can do it.',
      subTitle: '夢見ることができれば、それは実現できる。',
      name: 'Walt Disney',
      image: '/img/fvBg_03.jpg',
    },
  ];

  const [num, setNum] = useState<number>(Math.floor(Math.random() * messages.length));
  const isMounted = useRef<boolean>(false);
  const isChanging = useRef<boolean>(false);
  const titleArea = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  const change = async () => {
    if (!isChanging.current && isMounted.current) {
      isChanging.current = true;

      const newNum = Math.floor(Math.random() * messages.length);
      if (newNum === num) {
        isChanging.current = false;
        change();
      } else {
        if (titleArea.current && bg.current) {
          const duration = 1;
          setTimeout(() => {
            setNum(newNum);
          }, (duration * 1000) / 2);
          await fvChange(
            titleArea.current,
            bg.current.querySelector('span.-active') as HTMLSpanElement,
            bg.current.querySelectorAll('span')[newNum],
            duration
          );
          isChanging.current = false;
        }
      }
    }
  };

  useEffect(() => {
    if (!isMounted.current) isMounted.current = true;
  }, []);

  const props = { messages, num, titleArea, bg, change };
  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
