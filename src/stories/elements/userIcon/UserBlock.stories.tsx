import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import UserBlock, { ComponentProps } from 'components/blocks/UserBlock';

export default {
  title: 'Elements/UserIcon/Block with Name ',
  component: UserBlock,
  args: {
    userName: 'Sample User',
  },
  argTypes: {
    userName: {
      control: 'text',
    },
  },
  // decorators: [
  //   (Story) => (
  //     <div style={{ width: '100px' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} as Meta;

const Template: Story<ComponentProps> = (args) => <UserBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
Default.storyName = 'Default';

export const L = Template.bind({});
L.args = {
  types: ['alignCenter', 'l'],
  icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
L.storyName = 'L';

export const M = Template.bind({});
M.args = {
  types: ['alignCenter', 'm'],
  icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
M.storyName = 'M';

export const S = Template.bind({});
S.args = {
  types: ['alignCenter', 's'],
  icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
S.storyName = 'S';

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  types: ['iconLeft', 'm'],
  icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
AlignLeft.storyName = 'AlignLeft';

export const AlignRight = Template.bind({});
AlignRight.args = {
  types: ['iconRight', 'm'],
  icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
AlignRight.storyName = 'AlignRight';

export const alignCenter = Template.bind({});
alignCenter.args = {
  types: ['alignCenter', 'm'],
  icon_url: 'https://img.rodoma.net/img/user/icon/default.jpg',
};
alignCenter.storyName = 'AlignCenter';
