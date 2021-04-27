import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import * as Icons from 'components/elements/icons';
import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Elements/Icons',
  // component: TextArea,
} as Meta;

const Component: React.FC = () => {
  return (
    <StyledElements.Wrapper>
      <div className="component">
        <ul className="row">
          <li className="item -icon">
            <Icons.IconFollow />
          </li>
          <li className="item -icon">
            <Icons.IconDisFollow />
          </li>
          <li className="item -icon">
            <Icons.IconUser />
          </li>
          <li className="item -icon">
            <Icons.IconRelation />
          </li>
          <li className="item -icon">
            <Icons.IconComment />
          </li>
          <li className="item -icon">
            <Icons.IconMark />
          </li>
          <li className="item -icon">
            <Icons.IconMarkFill />
          </li>
          <li className="item -icon">
            <Icons.IconLike />
          </li>
          <li className="item -icon">
            <Icons.IconLikeFill />
          </li>
          <li className="item -icon">
            <Icons.IconLink />
          </li>
          <li className="item -icon">
            <Icons.IconClose />
          </li>
          <li className="item -icon">
            <Icons.IconAdd />
          </li>
          <li className="item -icon">
            <Icons.IconMinus />
          </li>
          <li className="item -icon">
            <Icons.IconMenu />
          </li>
          <li className="item -icon">
            <Icons.IconSearch />
          </li>
          <li className="item -icon">
            <Icons.IconEdit />
          </li>
          <li className="item -icon">
            <Icons.IconWidthFixed />
          </li>
          <li className="item -icon">
            <Icons.IconWidthOver />
          </li>
          <li className="item -icon">
            <Icons.IconRight />
          </li>
          <li className="item -icon">
            <Icons.IconUp />
          </li>
          <li className="item -icon">
            <Icons.IconDown />
          </li>
          <li className="item -icon">
            <Icons.IconCheck />
          </li>
          <li className="item -icon">
            <Icons.IconInfo />
          </li>
          <li className="item -icon">
            <Icons.IconTwitter />
          </li>
          <li className="item -icon">
            <Icons.IconNote />
          </li>
          <li className="item -icon">
            <Icons.IconMixi />
          </li>
          <li className="item -icon">
            <Icons.IconFacebook />
          </li>
          <li className="item -icon">
            <Icons.IconLinkedin />
          </li>
          <li className="item -icon">
            <Icons.IconInstagram />
          </li>
          <li className="item -icon">
            <Icons.IconPinterest />
          </li>
          <li className="item -icon">
            <Icons.IconYoutube />
          </li>
          <li className="item -icon">
            <Icons.IconList />
          </li>
          <li className="item -icon">
            <Icons.IconRaderChart />
          </li>
          <li className="item -icon">
            <Icons.IconGanttChart />
          </li>
          <li className="item -icon">
            <Icons.IconBan />
          </li>
          <li className="item -icon">
            <Icons.IconSummary />
          </li>
          <li className="item -icon">
            <Icons.IconTrash />
          </li>
          <li className="item -icon">
            <Icons.IconReload />
          </li>
        </ul>
      </div>
    </StyledElements.Wrapper>
  );
};

export const All: Story = () => <Component />;
