import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Wrapper } from 'stories/StyledElements';
import Paragraph from 'components/elements/Paragraph';

export default {
  title: 'Elements/Paragraph',
  component: Paragraph,
} as Meta;

const Component: React.FC = () => (
  <Wrapper>
    <div className="component">
      <p className="label">Paragraph</p>
      <div className="row">
        <div className="item">
          <Paragraph>Default Color テキスト</Paragraph>
        </div>
        <div className="item">
          <Paragraph types={['primary']}>Primary Color テキスト</Paragraph>
        </div>
        <div className="item -nega">
          <Paragraph types={['nega']}>Negative テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['bigTitle']}>Bit Title テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['title']}>Title テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['subTitle']}>Sub Title テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['catchText']}>Catch Text テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['catchText']}>Catch Text テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['text']}>Text テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['caption']}>Caption テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['smallCaption']}>Small Caption テキスト</Paragraph>
        </div>
      </div>
      <div className="row">
        <div className="item">
          <Paragraph types={['bold']}>Bold テキスト</Paragraph>
        </div>
      </div>
    </div>
  </Wrapper>
);

export const All: Story = () => <Component />;
