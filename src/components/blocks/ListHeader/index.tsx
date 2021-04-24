import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';
import { BreadCrumbList, SearchQuery } from 'types';
import { createBreadCrumbList } from 'utils';
import { searchQuerySelector, categoryTreeSelector, setQuery } from 'state/modules/app';
import ToggleTagList from 'components/blocks/ToggleTagList';
import Paragraph from 'components/elements/Paragraph';
import Selector from 'components/elements/inputs/Selector';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconClose } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'ListHeader';

// declare types

interface ComponentProps {
  title: string;
  sortKeys: {
    value: string;
    label: string;
  }[];
  listType: 'user' | 'post';
  className?: string;
}

interface Props extends ComponentProps {
  searchQuery: SearchQuery;
  breadCrumbList: BreadCrumbList;
  deleteBreadCrumb: (id: number) => void;
  changeSortKey: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  deleteKeyword: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="titleArea">
      <Paragraph types={['title']}>{props.title}</Paragraph>
      <Selector
        selected={props.searchQuery.orderBy[props.listType]}
        types={['s', 'primary']}
        name="orderBy"
        options={props.sortKeys}
        onChange={props.changeSortKey}
      />
    </div>
    {props.breadCrumbList.length > 0 && (
      <div className="breadCrumb">
        <ToggleTagList
          separator=">"
          types={['oneLine']}
          list={props.breadCrumbList}
          icon={<IconClose />}
          onClick={props.deleteBreadCrumb}
        />
      </div>
    )}
    <div className="bottom">
      {props.searchQuery.keyword.keyword !== '' && (
        <div className="keywordArea">
          <p className="keyword">
            Keyword: <span>{props.searchQuery.keyword.keyword}</span>
          </p>
          <CircleButton
            onClick={props.deleteKeyword}
            types={['xxs', 'gray_light']}
            className="removeKeyword"
          >
            <IconClose />
          </CircleButton>
        </div>
      )}
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { listType } = componentProps;

  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQuerySelector);
  const categoryTree = useSelector(categoryTreeSelector);

  const [breadCrumbList, setBreadCrumbList] = useState<BreadCrumbList>([]);

  useEffect(() => {
    setBreadCrumbList(createBreadCrumbList(searchQuery, categoryTree));
  }, [searchQuery, categoryTree]);

  const deleteBreadCrumb = (id: number) => {
    if (id === 0) {
      dispatch(
        setQuery({
          ...searchQuery,
          category: 0,
          specialty: 0,
        })
      );
    } else if (id === 1) {
      dispatch(
        setQuery({
          ...searchQuery,
          specialty: 0,
        })
      );
    }
  };

  const deleteKeyword = () => {
    dispatch(
      setQuery({
        ...searchQuery,
        keyword: {
          ...searchQuery.keyword,
          keyword: '',
        },
      })
    );
  };

  const changeSortKey = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setQuery({
        ...searchQuery,
        orderBy: {
          ...searchQuery.orderBy,
          [listType]: e.target.value,
        },
      })
    );
  };

  const props = { breadCrumbList, searchQuery, deleteBreadCrumb, changeSortKey, deleteKeyword };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
