import React, { useState } from 'react';
import Styled from 'styled-components';
import * as styles from './styles';
import { ListData, Options } from './types';
import SelectorInput from './SelectorInput';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconAdd } from 'components/elements/icons';

// component root class name
const CLASSNAME = 'SelectorInputList';

// declare types

export interface ComponentProps {
  onChangeList: (listData: ListData[]) => void;
  label: string;
  name: string;
  options: Options;
  listData: ListData[];
  className?: string;
}

interface Props extends ComponentProps {
  deleteFunc: (index: number) => void;
  selectorChange: (value: string | number, index: number) => void;
  textChange: (value: string, index: number) => void;
  add: () => void;
  localListData: ListData[];
  isAddable: boolean;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="inputArea">
      <ul className="list">
        {props.localListData.map((data: ListData, i: number) => {
          return (
            <li className="item" key={data.selectorData.selected}>
              <SelectorInput
                name={props.name}
                index={i}
                onClickDelete={props.deleteFunc}
                onSelectorChange={props.selectorChange}
                onTextChange={props.textChange}
                {...data}
              />
            </li>
          );
        })}
      </ul>
    </div>
    {props.isAddable && (
      <div className="buttonArea">
        <CircleButton onClick={props.add} types={['gray_light', 's']}>
          <IconAdd />
        </CircleButton>
      </div>
    )}
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}  
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { options, label, listData, onChangeList } = componentProps;

  console.log(listData);

  const createListData = (listData: ListData[]) => {
    const newlistData = listData.slice();
    return newlistData.map((data: ListData) => {
      const newOptions: Options = [];
      for (let i = 0; i < options.length; i++) {
        let isAdd = true;
        for (let j = 0; j < newlistData.length; j++) {
          if (
            options[i].value === newlistData[j].selectorData.selected &&
            options[i].value !== data.selectorData.selected
          ) {
            isAdd = false;
          }
        }
        if (isAdd) {
          newOptions.push(options[i]);
        }
      }
      data.selectorData.options = newOptions;
      data.inputData.label = label;
      return data;
    });
  };

  const [localListData, setLocalListData] = useState(createListData(listData));

  const isAddable = (() => {
    if (localListData.length === 0) {
      return true;
    } else {
      if (options.length > localListData.length) {
        return true;
      }
    }
    return false;
  })();

  const add = () => {
    for (let i = 0; i < options.length; i++) {
      let isSelected = false;
      for (let j = 0; j < localListData.length; j++) {
        if (options[i].value === localListData[j].selectorData.selected) {
          isSelected = true;
          break;
        }
      }
      if (!isSelected) {
        const newListData = localListData.slice();
        newListData.push({
          selectorData: {
            selected: options[i].value,
          },
          inputData: {
            value: '',
          },
        });
        const newLocalListData = createListData(newListData);
        setLocalListData(newLocalListData);
        onChangeList(newLocalListData);
        return;
      }
    }
  };

  const deleteFunc = (index: number) => {
    const newListData = localListData.slice();
    newListData.splice(index, 1);
    const newLocalListData = createListData(newListData);
    setLocalListData(newLocalListData);
    onChangeList(newLocalListData);
  };

  const selectorChange = (value: string | number, index: number) => {
    const newListData = localListData.slice();
    newListData[index].selectorData.selected = value;
    const newLocalListData = createListData(newListData);
    setLocalListData(newLocalListData);
    onChangeList(newLocalListData);
  };

  const textChange = (value: string, index: number) => {
    const newListData = localListData.slice();
    newListData[index].inputData.value = value;
    const newLocalListData = createListData(newListData);
    setLocalListData(newLocalListData);
    onChangeList(newLocalListData);
  };

  const props = {
    localListData,
    isAddable,
    deleteFunc,
    selectorChange,
    textChange,
    add,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
