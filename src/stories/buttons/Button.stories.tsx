import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Wrapper } from 'stories/StyledElements';
import CircleButton from 'components/elements/buttons/CircleButton';
import RoundButton from 'components/elements/buttons/RoundButton';
import TextButton from 'components/elements/buttons/TextButton';
import { IconFollow, IconAdd, IconRight } from 'components/elements/icons';

export default {
  title: 'Elements/Buttons',
  component: CircleButton,
} as Meta;

const Component: React.FC = () => (
  <Wrapper>
    <div className="component">
      <p className="label">CircleButton</p>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'l']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'm']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 's']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'xs']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <CircleButton types={['gradient', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_dark', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_midium', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['gray_light', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['primary', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['secondary', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item">
          <CircleButton types={['posi', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
        <div className="item -nega">
          <CircleButton types={['outline', 'xxs']}>
            <IconFollow />
          </CircleButton>
        </div>
      </div>
    </div>
    <div className="component">
      <p className="label">RoundButton</p>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 'l']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_dark', 'l']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_midium', 'l']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_light', 'l']}>サインアップ</RoundButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 'm']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_dark', 'm']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_midium', 'm']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_light', 'm']}>サインアップ</RoundButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 's']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_dark', 's']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_midium', 's']}>サインアップ</RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gray_light', 's']}>サインアップ</RoundButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <RoundButton types={['gradient', 'l']} disabled>
            決定
          </RoundButton>
        </div>
        <div className="item">
          <RoundButton types={['gradient', 's', 'withIcon']} icon={<IconAdd />}>
            画像を設定
          </RoundButton>
        </div>
      </div>
    </div>
    <div className="component">
      <p className="label">TextButton</p>
      <div className="row">
        <div className="item">
          <TextButton>デフォルトテキストボタン</TextButton>
        </div>
        <div className="item">
          <TextButton types={['withIconRight']}>
            テキストボタン
            <div className="icon">
              <IconRight />
            </div>
          </TextButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <TextButton types={['primary', 'l']}>テキストボタン</TextButton>
        </div>
        <div className="item">
          <TextButton types={['gray_midium', 'l']}>テキストボタン</TextButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <TextButton types={['primary', 'm']}>テキストボタン</TextButton>
        </div>
        <div className="item">
          <TextButton types={['gray_midium', 'm']}>テキストボタン</TextButton>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <TextButton types={['primary', 's']}>テキストボタン</TextButton>
        </div>
        <div className="item">
          <TextButton types={['gray_midium', 's']}>テキストボタン</TextButton>
        </div>
      </div>
    </div>
  </Wrapper>
);

export const All: Story = () => <Component />;
