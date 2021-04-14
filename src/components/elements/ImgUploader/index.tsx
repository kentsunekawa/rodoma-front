import React from 'react';
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { VALIDATE_ERROR_MESSAGES } from 'utils/messages';
import { setMessage } from 'state/modules/app';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'ImgUploader';

// declare types

interface ComponentProps {
  id: string;
  className?: string;
  onUpload: (dataUrl: string | ArrayBuffer | null) => void;
}

interface Props extends ComponentProps {
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// dom component
const Component: React.FC<Props> = props => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <label htmlFor={props.id} className='label'>
      <input type="file" id={props.id} onChange={props.change} />
      {props.children}
    </label>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = componentProps => {

  const { onUpload } = componentProps;

  const dispatch = useDispatch();

  const validate = (file: File) => {
    if(file.type !== 'image/jpeg' && file.type !== 'image/png') {
      dispatch(setMessage({
        isShow: true,
        type: 'error',
        message: VALIDATE_ERROR_MESSAGES.file_type_invalid,
      }));
      return false;  
    }
    if(file.size > 500000) {
      dispatch(setMessage({
        isShow: true,
        type: 'error',
        message: VALIDATE_ERROR_MESSAGES.file_size_invalid,
      }));
      return false;
    }
    return true;
  }

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      const result: boolean = validate(file);
      if(result){
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          const dataUrl = reader.result;
          onUpload(dataUrl);
        }
      }
    }
  }

  const props = { change, };

  return <StyeldComponent { ...componentProps } { ...props } ></StyeldComponent>;
}
export default Container;