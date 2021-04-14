import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchQuerySelector,
  setQuery,
  isSearchPanelOpenSelector,
  toggleSearchPanel
} from 'state/modules/app';
import Styled from 'styled-components';
import * as styles from './styles';
import QueryInput from './QueryInput';
import CategoryTree from './CategoryTree';
import { SearchQuery, KeywordSearchQuery } from 'types';
import { toggleSearchPanel as anim_toggleSearchPanel } from 'components/animations';


// component root class name
const CLASSNAME = 'SearchPanel';

// declare types
interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  searchQuery: SearchQuery;
  dom: {
    bg: React.Ref<HTMLDivElement>;
    inner: React.Ref<HTMLDivElement>;
  };
  search: (query: KeywordSearchQuery) => void;
  selectCategory: (category: number, specialty: number) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`} ref={props.dom.bg}>
    <div className='keywordArea'>
      <QueryInput
        query={props.searchQuery.keyword}
        onSearch={props.search}
      />
    </div>
    <div className='inner' ref={props.dom.inner}>
      <div className='categoryArea'>
        <CategoryTree
          onChange={props.selectCategory}
        />
      </div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const history = useHistory();
  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQuerySelector);
  const isOpen = useSelector(isSearchPanelOpenSelector);

  const localIsOpen = useRef<boolean>(isOpen);

  const dom = {
    bg: useRef<HTMLDivElement>(null),
    inner: useRef<HTMLDivElement>(null),
  }

  const selectCategory = (category: number, specialty: number) => {
    dispatch(setQuery({
      ...searchQuery,
      category,
      specialty,
    }));
    dispatch(toggleSearchPanel(false));
    history.push('/');
  }

  const search = (query: KeywordSearchQuery) => {
    console.log(query);
    
    dispatch(setQuery({
      ...searchQuery,
      keyword: query,
    }));
    dispatch(toggleSearchPanel(false));
    switch(query.key) {
      case 'user':
        history.push('/users');
        break;
      default:
        history.push('/');
    }
  }

  if(localIsOpen.current !== isOpen) {
    if(dom.bg.current && dom.inner.current) {
      anim_toggleSearchPanel(dom.bg.current, dom.inner.current, isOpen);
      localIsOpen.current = isOpen;
    }
  }
  
  const props = { searchQuery, dom, search, selectCategory };

  return <StyeldComponent { ...componentProps } { ...props }></StyeldComponent>;
}
export default Container;