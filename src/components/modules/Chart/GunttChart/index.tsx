import React, { useState } from 'react';
import Styled from 'styled-components';
import { Chart, Subject } from 'types';

import * as styles from './styles';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconPieChart, IconWidthFixed, IconWidthOver, IconAdd } from 'components/elements/icons';
import Bar from './Bar';

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
        <CircleButton types={['m', 'gray_midium']} onClick={() => props.onChangeChartType('pie')}>
          <IconPieChart />
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
                    <button onClick={() => props.onEdit && props.onEdit(i)}>
                      <span>{subject.title}</span>
                    </button>
                  </li>
                ) : (
                  <li className="item" key={i}>
                    <button onClick={() => props.onClickSubject(i)}>
                      <span>{subject.title}</span>
                    </button>
                  </li>
                );
              })}
              {props.editable && (
                <li className="item">
                  <CircleButton
                    types={['gray_light', 's']}
                    onClick={() => props.onEdit && props.onEdit(null)}
                  >
                    <IconAdd />
                  </CircleButton>
                </li>
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
