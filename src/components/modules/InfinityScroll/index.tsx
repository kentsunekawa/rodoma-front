/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from 'react';
import Styled from 'styled-components';

import LoadingBlock from 'components/blocks/LoadingBlock';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'InfinityScroll';

// declare types
interface ComponentProps {
  resetTriggerKeys?: any[];
  list: any;
  getDataFunc: (currentList: any[], currentOffset: number, cb: (count: number) => void) => void;
  className?: string;
}

interface Props extends ComponentProps {
  children: React.ReactNode;
  isLoading: boolean;
  isFetched: boolean;
  listStatus: {
    count: number;
    offset: number;
  };
  dom: {
    pageBottom: React.Ref<HTMLDivElement>;
  };
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="num">
      <p className="numText">
        all: <span>{props.listStatus.count}</span>
      </p>
    </div>
    <div className="main">
      {props.children}
      {props.list.length === 0 && props.isFetched ? (
        <div className="listMessage">該当するデータは見つかりませんでした</div>
      ) : null}
      {props.list.length > 0 && props.list.length >= props.listStatus.count ? (
        <div className="listMessage">全てのデータが表示されました</div>
      ) : null}
      {props.isLoading && <LoadingBlock />}
      <div id="pageBottom" ref={props.dom.pageBottom}></div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { resetTriggerKeys, list, getDataFunc } = componentProps;

  const [listStatus, setListStatus] = useState<{ count: number; offset: number }>({
    count: 0,
    offset: 0,
  });
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMounted = useRef<boolean>(false);
  const scrollFunc = useRef<() => void>();
  const dom = {
    pageBottom: useRef<HTMLDivElement>(null),
  };

  const getData = (currentList: any[] = [], currentOffset = 0) => {
    getDataFunc(currentList, currentOffset, (count: number) => {
      if (isMounted.current) {
        setListStatus({
          count,
          offset: currentOffset + 1,
        });
        setIsLoading(false);
        setIsFetched(true);
      }
    });
  };

  const createScrollFunc = () => () => {
    if (dom.pageBottom.current && scrollFunc.current) {
      if (dom.pageBottom.current.getBoundingClientRect().top < window.innerHeight) {
        if (list.length < listStatus.count && !isLoading) {
          setIsLoading(true);
          window.removeEventListener('scroll', scrollFunc.current);
          getData(list, listStatus.offset);
        } else {
          window.removeEventListener('scroll', scrollFunc.current);
        }
      }
    }
  };

  useEffect(() => {
    if (list.length < listStatus.count && isMounted.current) {
      if (scrollFunc.current) window.removeEventListener('scroll', scrollFunc.current);
      scrollFunc.current = createScrollFunc();
      window.addEventListener('scroll', scrollFunc.current);
    } else {
      if (scrollFunc.current) window.removeEventListener('scroll', scrollFunc.current);
    }
  }, [list]);

  useEffect(
    () => {
      if (isMounted.current) {
        setListStatus({
          count: 0,
          offset: 0,
        });
        setIsFetched(false);
        setIsLoading(true);
        getData();
      }
    },
    resetTriggerKeys ? resetTriggerKeys : []
  );

  useEffect(() => {
    getData();
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (scrollFunc.current) window.removeEventListener('scroll', scrollFunc.current);
    };
  }, []);

  const props = {
    dom,
    isLoading,
    isFetched,
    listStatus,
  };

  return (
    <StyeldComponent {...componentProps} {...props}>
      {componentProps.children}
    </StyeldComponent>
  );
};
export default Container;
