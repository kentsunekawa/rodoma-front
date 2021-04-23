import React from 'react';
import Styled from 'styled-components';
import Panel, { PanelData } from '../Panel';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'Intro';

// declare types

interface ComponentProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends ComponentProps {
  panelData: PanelData[];
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="inner">
      <h2 className="title">
        rodoma で出来ること
        <span>what you can do</span>
      </h2>
      <div className="panelArea">
        <ul className="panelList">
          {props.panelData.map((data, i) => {
            return (
              <li className="panelItem" key={i}>
                <Panel data={data} />
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
  const panelData = [
    {
      title: '見る・知る',
      subTitle: 'check',
      imgSrc: '/img/about/panelImage_check.svg',
      href: '#about_check',
    },
    {
      title: '作る・残す',
      subTitle: 'create',
      imgSrc: '/img/about/panelImage_create.svg',
      href: '#about_create',
    },
    {
      title: '探す・見つける',
      subTitle: 'search',
      imgSrc: '/img/about/panelImage_search.svg',
      href: '#about_search',
    },
    {
      title: '繋がる',
      subTitle: 'connect',
      imgSrc: '/img/about/panelImage_connect.svg',
      href: '#about_connect',
    },
    {
      title: 'その他',
      subTitle: 'others',
      imgSrc: '/img/about/panelImage_others.svg',
      href: '#about_others',
    },
  ];

  const props = { panelData };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
