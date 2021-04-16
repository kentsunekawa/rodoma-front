import React, { useState, useEffect, useCallback } from 'react';
import Styled from 'styled-components';
import { UserData_overview } from 'types';
import CheckList from 'components/blocks/CheckList';
import ToggleTagList from 'components/blocks/ToggleTagList';
import SearchKeyword from 'components/elements/inputs/SearchKeyword';
import Paragraph from 'components/elements/Paragraph';
import { IconMinus } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'UserSearch';

// declare types
interface CheckUserData {
  value: number;
  label: string;
}

interface ComponentProps {
  maxLength?: number;
  users: UserData_overview[];
  selectedUsers: UserData_overview[];
  className?: string;
  onChange: (selectedUsers: UserData_overview[]) => void;
}

interface Props extends ComponentProps {
  keyword: string;
  displayUsers: CheckUserData[];
  selectedIds: number[];
  tagUserList: {
    id: number;
    name: string;
  }[];
  search: () => void;
  changeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  change: (values: (string | number)[]) => void;
  tagClick: (i: number) => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="panel">
      <SearchKeyword
        placeholder="フォローしているユーザー名"
        value={props.keyword}
        onChange={props.changeKeyword}
        onClick={props.search}
      />
      {props.displayUsers.length ? (
        <CheckList
          name="allowedUsers"
          values={props.displayUsers}
          selected={props.selectedIds}
          boxTypes={['nega']}
          onChange={props.change}
          className="userCheckList"
        />
      ) : (
        <Paragraph className="message" types={['caption', 'nega', 'center']}>
          該当するユーザーが見つかりません
        </Paragraph>
      )}
    </div>
    {props.maxLength && (
      <Paragraph types={['text', 'center', 'primary']} className="numMessage">
        あと{props.maxLength - props.selectedIds.length}名選択可能です
      </Paragraph>
    )}
    <div className="listArea">
      <ToggleTagList list={props.tagUserList} onClick={props.tagClick} icon={<IconMinus />} />
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { selectedUsers, users, maxLength, onChange } = componentProps;

  const [keyword, setKeyword] = useState<string>('');
  const [displayUsers, setDisplayUsers] = useState<CheckUserData[]>([]);

  const selectedIds = (() => {
    return selectedUsers.map((user) => {
      return user.id;
    });
  })();

  const tagUserList = (() => {
    return selectedUsers.map((user) => {
      return {
        id: user.id,
        name: user.name,
      };
    });
  })();

  const changeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const search = useCallback(() => {
    const newUsers: CheckUserData[] = [];
    users.forEach((user) => {
      if (user.name.indexOf(keyword) !== -1) {
        newUsers.push({
          value: user.id,
          label: user.name,
        });
      }
    });
    setDisplayUsers(newUsers);
  }, [keyword, users]);

  // const search = () => {
  //   const newUsers: CheckUserData[] = [];
  //   users.forEach((user) => {
  //     if (user.name.indexOf(keyword) !== -1) {
  //       newUsers.push({
  //         value: user.id,
  //         label: user.name,
  //       });
  //     }
  //   });
  //   setDisplayUsers(newUsers);
  // };

  const change = (values: (string | number)[]) => {
    if (!maxLength || (maxLength && maxLength >= values.length)) {
      const newUsers: UserData_overview[] = [];
      users.forEach((user) => {
        if (values.includes(user.id)) {
          newUsers.push(user);
        }
      });
      onChange(newUsers);
    }
  };

  const tagClick = (i: number) => {
    const newUsers: UserData_overview[] = selectedUsers.slice();
    newUsers.splice(i, 1);
    onChange(newUsers);
  };

  useEffect(() => {
    search();
  }, [search]);

  const props = {
    keyword,
    displayUsers,
    selectedIds,
    tagUserList,
    tagClick,
    search,
    changeKeyword,
    change,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
