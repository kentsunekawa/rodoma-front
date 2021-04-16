import React, { useContext } from 'react';
import Styled from 'styled-components';

import { UserData } from 'types';

import Followings from './Followings';
import Followers from './Followers';
import TabChanger from 'components/modules/TabChanger/';
import Tabs from 'components/modules/TabChanger/Tabs';
import Tab from 'components/modules/TabChanger/Tab';
import TabContents from 'components/modules/TabChanger/TabContents';
import TabContent from 'components/modules/TabChanger/TabContent';
import UserBlock from 'components/blocks/UserBlock';

import { UserContext } from '../';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'UserRelations';

// declare types

interface ComponentProps {
  className?: string;
}

interface Props extends ComponentProps {
  user: UserData | null | undefined;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="userMain">
      <div className="userHeader">
        <UserBlock
          icon_url={props.user?.icon_url}
          userName={props.user?.name}
          types={['m', 'iconLeft']}
        />
      </div>
      <div className="relationListArea">
        <TabChanger selected={0}>
          <Tab>
            <Tabs tabList={['Followings', 'Followers']} tabType={'switcher'} />
          </Tab>
          <TabContents>
            <TabContent>
              <Followings />
            </TabContent>
            <TabContent>
              <Followers />
            </TabContent>
          </TabContents>
        </TabChanger>
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
  const { state } = useContext(UserContext);

  const props = { user: state.user };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
