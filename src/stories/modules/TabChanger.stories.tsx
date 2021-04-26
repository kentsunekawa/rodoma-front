import React, { useEffect } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TabChanger, { ComponentProps } from 'components/modules/TabChanger';
import Tab from 'components/modules/TabChanger/Tab';
import Tabs from 'components/modules/TabChanger/Tabs';
import TabContents from 'components/modules/TabChanger/TabContents';
import TabContent from 'components/modules/TabChanger/TabContent';
import { IconUser, IconList, IconMark, IconRelation } from 'components/elements/icons';
// import * as StyledElements from 'stories/StyledElements';

export default {
  title: 'Modules/TabChanger',
  component: TabChanger,
  argTypes: {
    selected: {
      control: {
        type: 'radio',
        options: [0, 1, 2, 3],
      },
    },
  },
  args: {
    selected: 0,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const RoundedTemplate: Story<ComponentProps> = (args) => (
  <TabChanger {...args}>
    <Tab>
      <Tabs
        tabList={[
          <IconUser key={1} />,
          <IconList key={2} />,
          <IconMark key={3} />,
          <IconRelation key={4} />,
        ]}
        tabType="rounded"
      ></Tabs>
    </Tab>
    <TabContents>
      <TabContent>Contents A</TabContent>
      <TabContent>Contents B</TabContent>
      <TabContent>Contents C</TabContent>
      <TabContent>Contents D</TabContent>
    </TabContents>
  </TabChanger>
);

const SwitcherTemplate: Story<ComponentProps> = (args) => (
  <TabChanger {...args}>
    <Tab>
      <Tabs
        tabList={['Content A', 'Content B', 'Content C', 'Content D']}
        tabType="switcher"
      ></Tabs>
    </Tab>
    <TabContents>
      <TabContent>Contents A</TabContent>
      <TabContent>Contents B</TabContent>
      <TabContent>Contents C</TabContent>
      <TabContent>Contents D</TabContent>
    </TabContents>
  </TabChanger>
);

const SimpleTemplate: Story<ComponentProps> = (args) => (
  <TabChanger {...args}>
    <Tab>
      <Tabs tabList={['Content A', 'Content B', 'Content C', 'Content D']} tabType="simple"></Tabs>
    </Tab>
    <TabContents>
      <TabContent>Contents A</TabContent>
      <TabContent>Contents B</TabContent>
      <TabContent>Contents C</TabContent>
      <TabContent>Contents D</TabContent>
    </TabContents>
  </TabChanger>
);

export const Rounded = RoundedTemplate.bind({});
Rounded.args = {};
Rounded.storyName = 'Rounded Tabs';

export const Switcher = SwitcherTemplate.bind({});
Switcher.args = {};
Switcher.storyName = 'Switcher Tabs';

export const Simpler = SimpleTemplate.bind({});
Simpler.args = {};
Simpler.storyName = 'Simple Tabs';
