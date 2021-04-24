import React, { useState } from 'react';
import Styled from 'styled-components';
import { Chart, Subject } from 'types';
import CircleButton from 'components/elements/buttons/CircleButton';
import Paragraph from 'components/elements/Paragraph';
import { IconRaderChart, IconWidthFixed, IconWidthOver, IconAdd } from 'components/elements/icons';
import Bar from './Bar';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'GunttChart';

// declare types

type DisplayType = 'over' | 'fixed';

interface ComponentProps {
  editable?: boolean;
  subjects: Subject[];
  className?: string;
  onEdit?: (i: number | null) => void;
  onClickSubject: (i: number) => void;
  onChangeChartType: (type: Chart) => void;
}

interface Props extends ComponentProps {
  displayType: DisplayType;
  changeDisplayType: () => void;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    {!props.editable && (
      <div className="nav">
        <CircleButton types={['m', 'gray_midium']} onClick={props.changeDisplayType}>
          {(() => {
            switch (props.displayType) {
              case 'fixed':
                return <IconWidthOver />;
              default:
                return <IconWidthFixed />;
            }
          })()}
        </CircleButton>
        <CircleButton
          types={['m', 'gray_midium']}
          onClick={() => props.onChangeChartType('radar')}
          className="chartTypeChange"
        >
          <IconRaderChart />
        </CircleButton>
      </div>
    )}
    <div className="wrapper">
      <div className="inner">
        <div className="main">
          <div className="nameArea">
            <ul className="nameList">
              {props.subjects.map((subject, i) => {
                return props.editable ? (
                  <li className="item" key={i}>
                    <button onClick={() => props.onEdit && props.onEdit(i)} className="button">
                      <span>{subject.title}</span>
                    </button>
                  </li>
                ) : (
                  <li className="item" key={i}>
                    <button onClick={() => props.onClickSubject(i)} className="button">
                      <span>{subject.title}</span>
                    </button>
                  </li>
                );
              })}
              {props.editable && (
                <>
                  {props.subjects.length < 20 ? (
                    <li className="item">
                      <CircleButton
                        types={['gray_light', 's']}
                        onClick={() => props.onEdit && props.onEdit(null)}
                      >
                        <IconAdd />
                      </CircleButton>
                    </li>
                  ) : (
                    <li className="item">
                      <Paragraph types={['caption', 'center', 'smallCaption']} className="alert">
                        ※設定できる項目の
                        <br />
                        上限（20個）に達しました
                      </Paragraph>
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
          <div className="barArea">
            <div className="bar">
              <ul className="list">
                {props.subjects.map((subject, i) => {
                  return (
                    <li className="item" key={i}>
                      <Bar
                        linkable={!props.editable}
                        left={subject.renge_start}
                        width={subject.renge_end - subject.renge_start}
                        label={subject.label}
                        linkedPostId={subject.linked_post_id}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
  ${({ displayType }) => styles[displayType]}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const [displayType, setDisplayType] = useState<DisplayType>('fixed');

  const changeDisplayType = () => {
    setDisplayType(displayType === 'fixed' ? 'over' : 'fixed');
  };

  const props = { displayType, changeDisplayType };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
