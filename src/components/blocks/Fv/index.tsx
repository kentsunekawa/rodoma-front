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
    title: 'If you can dream it,<br>you can do it.',
    subTitle: '夢見ることができれば、それは実現できる。',
    name: 'Walt Disney',
    image: '/img/fvBg_03.jpg',
  },

  {
    title: 'I have not failed. <br>I’ve just found 10,000 ways that won’t work.',
    subTitle: '失敗なんかしちゃいない。うまくいかない方法を一万通り見つけただけだ。',
    name: 'Thomas A. Edison',
    image: '/img/fvBg_04.jpg',
  },
  {
    title: 'Life is either a great adventure or nothing.',
    subTitle: '人生とは、果敢なる冒険かそれともつまらぬもののどちらかです。',
    name: 'Helen Keller',
    image: '/img/fvBg_05.jpg',
  },
  {
    title: 'It’s all about the journey, <br>not the outcome.',
    subTitle: 'すべては過程だ。結果ではない。',
    name: 'Carl Lewis',
    image: '/img/fvBg_06.jpg',
  },
  {
    title: 'He who moves not forward, <br>goes backward.',
    subTitle: '前進をしない人は、後退をしているのだ。',
    name: 'Johann Wolfgang von Goethe',
    image: '/img/fvBg_07.jpg',
  },
  {
    title: 'Imagination means nothing without doing.',
    subTitle: '行動を伴わない想像力は、何の意味も持たない。',
    name: 'Charlie Chaplin',
    image: '/img/fvBg_08.jpg',
  },
  {
    title: 'One today is worth two tomorrow.',
    subTitle: '今日という一日は、<br>明日という日の二日分の値打ちがある。',
    name: 'Benjamin Franklin',
    image: '/img/fvBg_09.jpg',
  },
  {
    title: 'Leave nothing for tomorrow<br>which can be done today.',
    subTitle: '今日出来ることを明日に残すな。',
    name: 'Abraham Lincoln',
    image: '/img/fvBg_10.jpg',
  },
];

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
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
