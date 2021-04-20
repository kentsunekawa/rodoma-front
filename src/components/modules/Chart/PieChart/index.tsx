import React from 'react';
import { useSelector } from 'react-redux';
import Styled from 'styled-components';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import AppTheme from 'components/style/AppTheme';
import { Chart, Subject, Mode } from 'types';
import { modeSelector } from 'state/modules/app';
import CircleButton from 'components/elements/buttons/CircleButton';
import { IconGanttChart } from 'components/elements/icons';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'PieChart';

// declare types
interface CustomizedTickProps {
  className: string;
  cx: number;
  cy: number;
  fill: undefined;
  index: number;
  orientation: string;
  payload: {
    coordinate: number;
    index: number;
    offset: number;
    value: string;
  };
  radius: number;
  stroke: string;
  textAnchor: string;
  type: string;
  x: number;
  y: number;
}

interface ComponentProps {
  subjects: Subject[];
  className?: string;
  onChangeChartType: (type: Chart) => void;
  onClickSubject: (i: number) => void;
}

interface Props extends ComponentProps {
  graphData: {
    i: number;
    label: string;
    value: number;
    color: string;
    fullMark: number;
  }[];
  mode: Mode;
  tickFormatter: (value: string, i: number) => string;
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
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.graphData}>
                <PolarGrid stroke="#fff" />
                <PolarAngleAxis
                  dataKey="label"
                  onClick={(e) => props.onClickSubject(e.index)}
                  tick={true}
                  tickFormatter={props.tickFormatter}
                />
                <PolarRadiusAxis domain={[0, 100]} fill="#fff" stroke="#fff" fontSize="1.4rem" />
                <Radar
                  name="Subjects"
                  dataKey="value"
                  stroke="#fff"
                  fill="#fff"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
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

  const graphData = subjects.map((subject, i) => {
    const colorIndex = subject.label !== null ? subject.label : 0;
    return {
      i,
      label: subject.title,
      value: subject.renge_end - subject.renge_start,
      color: AppTheme[mode].colors.subjects[colorIndex],
      fullMark: 100,
    };
  });

  const tickFormatter = (value: string, i: number) => {
    if (value.length > 10) {
      return value.substring(0, 7) + '…';
    }
    return value;
  };

  const props = { graphData, mode, tickFormatter };

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
