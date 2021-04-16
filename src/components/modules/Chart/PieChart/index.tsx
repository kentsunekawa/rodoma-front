import React from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';

import AppTheme from 'components/style/AppTheme';
import { Chart, Subject, Mode } from 'types';
import { modeSelector } from 'state/modules/app';

import CircleButton from 'components/elements/buttons/CircleButton';
import { IconGanttChart } from 'components/elements/icons';

import * as styles from './styles';

// component root class name
const CLASSNAME = 'PieChart';

// declare types

interface ComponentProps {
  subjects: Subject[];
  className?: string;
  onChangeChartType: (type: Chart) => void;
  onClickSubject: (i: number) => void;
}

interface Props extends ComponentProps {
  graphData: {
    label: string;
    value: number;
    color: string;
    fullMark: number;
  }[];
  mode: Mode;
}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="nav">
      <CircleButton types={['m', 'gray_midium']} onClick={() => props.onChangeChartType('guntt')}>
        <IconGanttChart />
      </CircleButton>
    </div>
    <div className="wrapper">
      <div className="inner">
        <div className="main">
          <div className="chartWrapper"></div>
        </div>
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
  const { subjects } = componentProps;
  const mode = useSelector(modeSelector);

  const graphData = subjects.map((subject) => {
    const colorIndex = subject.label !== null ? subject.label : 0;
    return {
      label: subject.title,
      value: subject.renge_end - subject.renge_start,
      color: AppTheme[mode].colors.subjects[colorIndex],
      fullMark: 100,
    };
  });

  const props = { graphData, mode };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
