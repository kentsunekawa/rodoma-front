import React, { useState } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import Selector from 'components/elements/inputs/Selector';
import SearchKeyword from 'components/elements/inputs/SearchKeyword';
import { KeywordSearchQuery } from 'types';

// component root class name
const CLASSNAME = 'QueryInput';

// declare types
interface ComponentProps {
  query: KeywordSearchQuery;
  onSearch: (query: KeywordSearchQuery) => void;
  className?: string;
}

interface Props extends ComponentProps {
  keywordQuery: KeywordSearchQuery;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectorChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickSearchButton: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="selector">
      <Selector
        selected={props.keywordQuery.key}
        options={[
          {
            label: 'ロードマップ',
            value: 'post',
          },
          {
            label: 'ユーザー',
            value: 'user',
          },
        ]}
        onChange={props.onSelectorChange}
        types={['primary', 's']}
      />
    </div>
    <div className="input">
      <SearchKeyword
        placeholder="Keyword..."
        value={props.keywordQuery.keyword}
        onChange={props.onKeywordChange}
        onClick={props.onClickSearchButton}
      />
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { query, onSearch } = componentProps;

  const [keywordQuery, setKeywordQuery] = useState(query);

  const onClickSearchButton = () => {
    onSearch(keywordQuery);
  };

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      setKeywordQuery({
        ...keywordQuery,
        keyword: e.target.value,
      });
    }
  };

  const onSelectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setKeywordQuery({
      ...keywordQuery,
      key: e.target.value === 'user' ? 'user' : 'post',
    });
  };

  const props = { keywordQuery, onSelectorChange, onKeywordChange, onClickSearchButton };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
