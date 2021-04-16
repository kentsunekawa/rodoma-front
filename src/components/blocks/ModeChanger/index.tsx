import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modeSelector, modeChange } from 'state/modules/app';
import Switch from 'components/elements/Switch';

// declare types
interface Props {
  change: (value: boolean) => void;
  isChecked: boolean;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <Switch isChecked={props.isChecked} onChange={props.change} />
);

// container component
const Container: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector(modeSelector);
  const isChecked = mode === 'light' ? false : true;

  const change = (value: boolean) => {
    dispatch(modeChange(value ? 'dark' : 'light'));
  };

  const props = { change, isChecked };

  return <Component {...props}></Component>;
};
export default Container;
