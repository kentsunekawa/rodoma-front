import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';

import { Subject, ValidateStatus, SubjectLabel, PostData } from 'types';
import { LABEL_LIST } from 'utils';
import { subject as validate_subject } from 'validations';
import { setModal } from 'state/modules/app';

import Error from 'components/elements/Error';
import TextInput from 'components/elements/inputs/TextInput';
import TextArea from 'components/elements/inputs/TextArea';
import Selector from 'components/elements/inputs/Selector';
import RoundButton from 'components/elements/buttons/RoundButton';
import LabelRadio from 'components/blocks/LabelRadio';

import { PostEditContext } from '../../';
import * as styles from './styles';

// component root class name
const CLASSNAME = '';

// declare types

interface Errors {
  title: string[];
}

interface ComponentProps {
  post: PostData;
  linkablePosts: {
    value: number;
    label: string;
  }[];
  currentSubject: number | null;
  className?: string;
  desideSubject: (subject: Subject) => void;
}

interface Props extends ComponentProps {
  subject: Subject;
  validateStatus: ValidateStatus<Errors>;
  rengeOptions: () => {
    start: {
      value: number;
      label: string;
    }[];
    end: {
      value: number;
      label: string;
    }[];
  };
  textChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  linkPostChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  rengeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  labelChange: (value: number) => void;
  deside: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="row">
      <Error messages={props.validateStatus.errors.title}>
        <TextInput
          label="Title"
          name="title"
          value={props.subject.title}
          onChange={props.textChange}
        />
      </Error>
    </div>
    <div className="row -label">
      <span className="rowLabel">Label</span>
      <LabelRadio
        name="label"
        values={LABEL_LIST}
        selected={props.subject.label ? props.subject.label : 0}
        onChange={props.labelChange}
      />
    </div>
    <div className="row -renge">
      <Selector
        types={['s']}
        label="Start"
        name="renge_start"
        options={props.rengeOptions().start}
        selected={props.subject.renge_start.toString()}
        onChange={props.rengeChange}
        className="rengeSelector"
      />
      〜
      <Selector
        types={['s']}
        label="End"
        name="renge_end"
        options={props.rengeOptions().end}
        selected={props.subject.renge_end.toString()}
        onChange={props.rengeChange}
        className="rengeSelector"
      />
    </div>
    <div className="row">
      <TextArea
        label="Description"
        name="description"
        value={props.subject.description}
        onChange={props.textChange}
      />
    </div>
    <div className="row">
      <Selector
        label="Link to other Roadmap"
        name="linked_post_id"
        options={props.linkablePosts}
        selected={props.subject.linked_post_id === null ? 0 : props.subject.linked_post_id}
        onChange={props.linkPostChange}
      />
    </div>
    <div className="bottom">
      <RoundButton types={['l', 'gradient']} onClick={props.deside}>
        OK
      </RoundButton>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const { currentSubject, desideSubject, post } = componentProps;
  const { state } = useContext(PostEditContext);

  const [subject, setSubject] = useState<Subject>({
    id: 0,
    post_id: state.id || 0,
    label: null,
    linked_post_id: null,
    renge_start: 0,
    renge_end: 50,
    title: 'subject title here...',
    description: '',
  });

  const [validateStatus, setValidateStatus] = useState<ValidateStatus<Errors>>({
    isInvalid: false,
    errors: {
      title: [],
    },
  });

  const rengeOptions = () => {
    const start = [];
    for (let i = 0; i < subject.renge_end; i++) {
      if (i % 5 === 0) {
        start.push({
          value: i,
          label: i.toString(),
        });
      }
    }
    const end = [];
    for (let i = subject.renge_start + 1; i <= 100; i++) {
      if (i % 5 === 0) {
        end.push({
          value: i,
          label: i.toString(),
        });
      }
    }
    return { start, end };
  };

  const textChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubject({
      ...subject,
      [e.target.name]: e.target.value,
    });
  };

  const rengeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject({
      ...subject,
      [e.target.name]: Number(e.target.value),
    });
  };

  const linkPostChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject({
      ...subject,
      [e.target.name]: e.target.value,
    });
  };

  const deside = () => {
    const validateResult = validate_subject(subject);

    setValidateStatus({
      isInvalid: validateResult.hasErrors(),
      errors: {
        title: [],
        ...validateResult.getErrors(),
      },
    });

    if (!validateResult.hasErrors()) {
      desideSubject(subject);
      dispatch(setModal(''));
    }
  };

  const labelChange = (value: number) => {
    const label = value === 0 ? null : (value as SubjectLabel);
    setSubject({
      ...subject,
      label,
    });
  };

  useEffect(() => {
    if (currentSubject !== null) {
      setSubject(post.subjects[currentSubject]);
    }
  }, [currentSubject, post.subjects]);

  const props = {
    subject,
    validateStatus,
    rengeOptions,
    textChange,
    linkPostChange,
    rengeChange,
    labelChange,
    deside,
  };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
