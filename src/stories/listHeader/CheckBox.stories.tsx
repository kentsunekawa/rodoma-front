import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { StyeldComponent, Props } from 'components/blocks/ListHeader';

export default {
  title: 'Blocks/ListHeader/ListHeader',
  component: StyeldComponent,
  argTypes: {
    deleteBreadCrumb: {
      action: 'delete category or specialty',
    },
    changeSortKey: {
      action: 'change sort key',
    },
    deleteKeyword: {
      action: 'clear keyword',
    },
  },
  args: {
    title: 'タイトルタイトル',
    sortKeys: [
      {
        value: 'like',
        label: 'Like',
      },
      {
        value: 'mark',
        label: 'Mark',
      },
      {
        value: 'created_at',
        label: 'New',
      },
    ],
    breadCrumbList: [],
    searchQuery: {
      keyword: {
        keyword: '',
        key: 'post',
      },
      category: 2,
      specialty: 2,
      orderBy: {
        post: 'likes_count',
        user: 'created_at',
      },
    },
    listType: 'post',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <StyeldComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.storyName = 'Default';

export const OnlyCategorySelected = Template.bind({});
OnlyCategorySelected.args = {
  breadCrumbList: [
    {
      id: 2,
      name: 'Category',
    },
  ],
};

OnlyCategorySelected.storyName = 'Only Category Selected';

export const CategorySpecialtySelected = Template.bind({});
CategorySpecialtySelected.args = {
  breadCrumbList: [
    {
      id: 2,
      name: 'Category',
    },
    {
      id: 2,
      name: 'Specialty',
    },
  ],
};

CategorySpecialtySelected.storyName = 'Category and Specialty Selected';

export const KeywordInput = Template.bind({});
KeywordInput.args = {
  searchQuery: {
    keyword: {
      keyword: 'キーワード',
      key: 'post',
    },
    category: 2,
    specialty: 2,
    orderBy: {
      post: 'likes_count',
      user: 'created_at',
    },
  },
};

KeywordInput.storyName = 'Keyword input';

export const FullSelected = Template.bind({});
FullSelected.args = {
  breadCrumbList: [
    {
      id: 2,
      name: 'Category',
    },
    {
      id: 2,
      name: 'Specialty',
    },
  ],
  searchQuery: {
    keyword: {
      keyword: 'キーワード',
      key: 'post',
    },
    category: 2,
    specialty: 2,
    orderBy: {
      post: 'likes_count',
      user: 'created_at',
    },
  },
};

FullSelected.storyName = 'Full Selected';
