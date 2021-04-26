import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Wrapper } from 'stories/StyledElements';
import UserBlock from 'components/blocks/UserBlock';
import UserIcon from 'components/elements/UserIcon';

export default {
  title: 'Elements/UserIcon',
  component: UserBlock,
} as Meta;

const Component: React.FC = () => (
  <Wrapper>
    <div className="component">
      <p className="label">UserIcon</p>
      <div className="row">
        <div className="item">
          <UserIcon url="https://img.rodoma.net/img/user/icon/default.jpg" />
        </div>
      </div>
      <div className="row -alignBottom">
        <div className="item">
          <UserBlock
            types={['l', 'alignCenter']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="L Align Center"
          />
        </div>
        <div className="item">
          <UserBlock
            types={['m', 'alignCenter']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="M Align Center"
          />
        </div>
        <div className="item">
          <UserBlock
            types={['s', 'alignCenter']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="S Align Center"
          />
        </div>
      </div>
      <div className="row -alignMiddle">
        <div className="item">
          <UserBlock
            types={['l', 'iconLeft']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="L Align Left"
          />
        </div>
        <div className="item">
          <UserBlock
            types={['m', 'iconLeft']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="M Align Left"
          />
        </div>
        <div className="item">
          <UserBlock
            types={['s', 'iconLeft']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="S Align Left"
          />
        </div>
      </div>
      <div className="row -alignMiddle">
        <div className="item">
          <UserBlock
            types={['l', 'iconRight']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="L Align Right"
          />
        </div>
        <div className="item">
          <UserBlock
            types={['m', 'iconRight']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="M Align Right"
          />
        </div>
        <div className="item">
          <UserBlock
            types={['s', 'iconRight']}
            icon_url="https://img.rodoma.net/img/user/icon/default.jpg"
            userName="S Align Right"
          />
        </div>
      </div>
    </div>
  </Wrapper>
);

export const All: Story = () => <Component />;
