import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import {
  IconTwitter,
  IconFacebook,
  IconLinkedin,
  IconPinterest,
  IconInstagram,
  IconYoutube,
} from 'components/elements/icons'


// component root class name
const CLASSNAME = 'SnsLinkList';

// declare types
interface ComponentProps {
  className?: string;
  snsList: {
    id: number;
    url: string;
  }[];
}

interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <ul className='list'>
      {
        props.snsList.map((sns, i) => {
          return <li className='item' key={i}>
            <a href={sns.url} className='link' target='_blank'>
              {(() => {
                switch(sns.id){
                  case 1:
                    return <IconTwitter />
                  case 2:
                    return <IconFacebook />
                  case 3:
                    return <IconLinkedin />
                  case 4:
                      return <IconInstagram />
                  case 5:
                    return <IconPinterest />
                  case 6:
                      return <IconYoutube />
                  case 7:
                    return <IconTwitter />
                  case 8:
                    return <IconTwitter />
                }
              })()}
            </a>
          </li>;
        })
      }
    </ul>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {
  return <StyeldComponent { ...componentProps } ></StyeldComponent>;
}
export default Container;