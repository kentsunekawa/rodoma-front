import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Wrapper } from 'stories/StyledElements';
import TextArea from 'components/elements/inputs/TextArea';
import TextInput from 'components/elements/inputs/TextInput';
import Selector from 'components/elements/inputs/Selector';
import SearchKeyword from 'components/elements/inputs/SearchKeyword';

export default {
  title: 'Elements/Inputs',
  component: TextArea,
} as Meta;

const Component: React.FC = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const options = [
    {
      value: 0,
      label: 'Choice 01',
    },
    {
      value: 1,
      label: 'Choice 02',
    },
    {
      value: 2,
      label: 'Choice 03',
    },
    {
      value: 3,
      label: 'Choice 04',
    },
    {
      value: 4,
      label: 'Choice 05',
    },
  ];

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
      <div className="component">
        <p className="label">Selector</p>
        <div className="row">
          <div className="item -width20Per">
            <Selector options={options} />
          </div>
          <div className="item -width20Per">
            <Selector options={options} label={'Selector'} />
          </div>
          <div className="item -width20Per">
            <Selector options={options} types={['s']} />
          </div>
          <div className="item -width20Per">
            <Selector options={options} types={['s']} label={'Selector'} />
          </div>
        </div>
        <div className="row">
          <div className="item -width20Per">
            <Selector options={options} label={'Selector'} types={['primary']} />
          </div>
          <div className="item -width20Per">
            <Selector options={options} disabled />
          </div>
        </div>
      </div>
      <div className="component">
        <p className="label">SearchKeyword</p>
        <div className="row">
          <div className="item -width30Per" style={{ width: '300px' }}>
            <SearchKeyword
              value={inputValue}
              placeholder="This is search keyword input."
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const All: Story = () => <Component />;
