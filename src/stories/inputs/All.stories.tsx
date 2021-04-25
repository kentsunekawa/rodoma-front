import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Wrapper } from 'stories/StyledElements';
import TextArea from 'components/elements/inputs/TextArea';
import TextInput from 'components/elements/inputs/TextInput';

export default {
  title: 'Elements/Inputs',
  component: TextArea,
} as Meta;

const Component: React.FC = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <Wrapper>
      <div className="component">
        <p className="label">TextInput</p>
        <div className="row">
          <div className="item">
            <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>
          <div className="item">
            <TextInput
              value={inputValue}
              label="Name"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="item">
            <TextInput
              value={inputValue}
              label="Name"
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="item">
            <TextInput
              value={inputValue}
              types={['s']}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="item">
            <TextInput
              value={inputValue}
              types={['s']}
              label="Name"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="item">
            <TextInput
              value={inputValue}
              types={['s']}
              label="Name"
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="item">
            <TextInput
              value={inputValue}
              label="Password"
              required
              type="password"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="component">
        <p className="label">TextArea</p>
        <div className="row">
          <div className="item">
            <TextArea
              value={textAreaValue}
              height={100}
              onChange={(e) => setTextAreaValue(e.target.value)}
            ></TextArea>
          </div>
          <div className="item">
            <TextArea
              value={textAreaValue}
              types={['s']}
              height={100}
              onChange={(e) => setTextAreaValue(e.target.value)}
            ></TextArea>
          </div>
          <div className="item">
            <TextArea
              value={textAreaValue}
              placeholder="Placeholder.."
              height={100}
              onChange={(e) => setTextAreaValue(e.target.value)}
            ></TextArea>
          </div>
        </div>

        <div className="row">
          <div className="item">
            <TextArea
              value={textAreaValue}
              label="Description"
              height={100}
              onChange={(e) => setTextAreaValue(e.target.value)}
            ></TextArea>
          </div>
          <div className="item">
            <TextArea
              value={textAreaValue}
              isMarkdownOk
              height={100}
              onChange={(e) => setTextAreaValue(e.target.value)}
            ></TextArea>
          </div>
          <div className="item -nega">
            <TextArea
              value={textAreaValue}
              types={['noBorder']}
              placeholder="This is borderless textarea"
              height={100}
              onChange={(e) => setTextAreaValue(e.target.value)}
            ></TextArea>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const All: Story = () => <Component />;
