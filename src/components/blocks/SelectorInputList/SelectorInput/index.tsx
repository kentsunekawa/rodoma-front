import React from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { InputData, SelectorData } from '../types';
import CircleButton from 'components/elements/buttons/CircleButton';
import TextInput from 'components/elements/inputs/TextInput';
import Selector from 'components/elements/inputs/Selector';
import { IconClose } from 'components/elements/icons';

// component root class name
const CLASSNAME = 'SelectorInput';

// declare types
interface ComponentProps {
  index: number;
  name: string;
  onClickDelete: (index:number) => void;
  onSelectorChange: (value: number | string, index: number) => void;
  onTextChange: (value: string, index: number) => void;
  className?: string;
  selectorData: SelectorData;
  inputData: InputData;
}

interface Props extends ComponentProps {
  clickDelete: () => void;
  textChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectorChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="selector">
      <Selector
        selected={props.selectorData.selected}
        options={props.selectorData.options!}
        onChange={props.selectorChange}
        types={['primary', 's']}
        name={`${props.name}_selectro`}
      />
    </div>
    <div className="input">
      <div className="textInput">
        <TextInput
          type='text'
          types={['s']}
          { ...props.inputData }
          onChange={props.textChange}
          name={`${props.name}_input`}
        />
      </div>
      <div className="deleteButton">
        <CircleButton
          onClick={props.clickDelete}
          types={['xs', 'gray_dark']}
        >
          <IconClose />
        </CircleButton>
      </div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const {
    index,
    selectorData,
    onSelectorChange,
    onTextChange,
    onClickDelete
  } = componentProps;

  const selectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    const selectorValueType = selectorData.options && typeof selectorData.options[0].value;
    if(selectorValueType === 'number') {
      onSelectorChange(Number(e.target.value) ,index)  
    } else {
      onSelectorChange(e.target.value ,index)
    }
  }

  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    onTextChange(e.target.value ,index)
  }

  const clickDelete = () => {
    onClickDelete(index);
  }

  const props = { textChange, clickDelete, selectorChange };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;