import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';

import { ValidateStatus } from 'types';
import { postSummary } from 'validations';
import { setModal, categoryTreeSelector } from 'state/modules/app';

import ImgUploader from 'components/elements/ImgUploader';
import Error from 'components/elements/Error';
import TextInput from 'components/elements/inputs/TextInput';
import TextArea from 'components/elements/inputs/TextArea';
import Selector from 'components/elements/inputs/Selector';
import RoundButton from 'components/elements/buttons/RoundButton';
import { IconAdd } from 'components/elements/icons';

import { SummaryData } from '../../PostCreator';
import { PostEditContext } from '../../';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'PostSummaryEditor';

// declare types
interface Errors {
  title: string[];
}

interface ComponentProps {
  className?: string;
  desideSummary: (summary: SummaryData) => void;
}

interface Props extends ComponentProps {
  summary: SummaryData;
  validateStatus: ValidateStatus<Errors>;
  categoryOptions: {
    value: number;
    label: string;
  }[];
  specialtyOptions: {
    value: number;
    label: string;
  }[];
  textChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  categoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  imgChange: (dataUrl: string | ArrayBuffer | null) => void;
  deside: () => void;
  close: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div
      className="cover"
      style={{
        backgroundImage: `url(${props.summary.eye_catch_url})`,
      }}
    >
      <ImgUploader className="iconChangeButton" id="eyeCatch" onUpload={props.imgChange}>
        <RoundButton className="button" types={['s', 'gradient', 'withIcon']} icon={<IconAdd />}>
          アイキャッチ画像を設定する
        </RoundButton>
      </ImgUploader>
    </div>
    <div className="main">
      <div className="row">
        <Error messages={props.validateStatus.errors.title}>
          <TextInput
            required
            label="Title"
            name="title"
            value={props.summary.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.textChange(e)}
          />
        </Error>
      </div>
      <div className="row">
        <TextArea
          isMarkdownOk
          label="Description"
          name="description"
          value={props.summary.description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => props.textChange(e)}
        />
      </div>
      <div className="row -category">
        <Selector
          label="Category"
          name="category_id"
          options={props.categoryOptions}
          selected={props.summary.category_id}
          types={['l']}
          onChange={props.categoryChange}
          className="categorySelector"
        />
        <Selector
          label="Specialty"
          name="specialty_id"
          options={props.specialtyOptions}
          selected={props.summary.specialty_id}
          types={['l']}
          onChange={props.categoryChange}
          disabled={props.summary.category_id === 1}
        />
      </div>
      <div className="bottom">
        <RoundButton types={['m', 'gray_midium']} onClick={props.close} className="desideButton">
          キャンセル
        </RoundButton>
        <RoundButton types={['l', 'gradient']} onClick={props.deside} className="desideButton">
          決定
        </RoundButton>
      </div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const { desideSummary } = componentProps;

  const dispatch = useDispatch();
  const { state } = useContext(PostEditContext);
  const categoryTree = useSelector(categoryTreeSelector);

  const [summary, setSummary] = useState<SummaryData>({
    title: state.post ? state.post.title : '',
    description: state.post ? state.post.description : '',
    category_id: state.post ? state.post.category_id : 0,
    specialty_id: state.post ? state.post.specialty_id : 0,
    eye_catch_url: state.post ? state.post.eye_catch_url : '',
  });

  const [validateStatus, setValidateStatus] = useState<ValidateStatus<Errors>>({
    isInvalid: false,
    errors: {
      title: [],
    },
  });

  const categoryOptions = categoryTree.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  const specialtyOptions = (() => {
    if (categoryTree.length) {
      if (summary.category_id !== 1) {
        let specialtyOptions: {
          value: number;
          label: string;
        }[] = [];
        categoryTree.forEach((category) => {
          if (category.id === summary.category_id) {
            specialtyOptions = category.specialties.map((specialty) => ({
              value: specialty.id,
              label: specialty.name,
            }));
          }
        });
        return specialtyOptions;
      }
      return [
        {
          value: categoryTree[0].specialties[0].id,
          label: categoryTree[0].specialties[0].name,
        },
      ];
    }
    return [];
  })();

  const deside = () => {
    const validateResult = postSummary(summary);
    setValidateStatus({
      isInvalid: validateResult.hasErrors(),
      errors: {
        title: [],
        ...validateResult.getErrors(),
      },
    });

    if (!validateResult.hasErrors()) {
      desideSummary(summary);
      dispatch(setModal(''));
    }
  };

  const close = () => {
    dispatch(setModal(''));
  };

  const textChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSummary({
      ...summary,
      [e.target.name]: e.target.value,
    });
  };

  const categoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === 'category_id') {
      let specialtyId = 1;
      categoryTree.forEach((category) => {
        if (category.id === Number(e.target.value)) {
          specialtyId = category.specialties[0].id;
        }
      });
      setSummary({
        ...summary,
        category_id: Number(e.target.value),
        specialty_id: specialtyId,
      });
    } else if (e.target.name === 'specialty_id') {
      setSummary({
        ...summary,
        specialty_id: Number(e.target.value),
      });
    }
  };

  const imgChange = (dataUrl: string | ArrayBuffer | null) => {
    if (typeof dataUrl === 'string') {
      setSummary({
        ...summary,
        eye_catch_url: dataUrl,
      });
    }
  };

  const props = {
    summary,
    validateStatus,
    categoryOptions,
    specialtyOptions,
    textChange,
    categoryChange,
    imgChange,
    deside,
    close,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
