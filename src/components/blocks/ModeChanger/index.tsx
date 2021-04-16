import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Mode } from 'types';
import { modeSelector, modeChange } from 'state/modules/app';
import Switch from 'components/elements/Switch';

// declare types
interface Props {
  change: (value: boolean) => void;
  mode: Mode;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <Switch isChecked={props.mode === 'light' ? false : true} onChange={props.change} />
);

// container component
const Container: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector(modeSelector);
  console.log(mode);

  const change = (value: boolean) => {
    dispatch(modeChange(value ? 'dark' : 'light'));
  };

  const props = { change, mode };

  return <Component {...props}></Component>;
};
export default Container;
