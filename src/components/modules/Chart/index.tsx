import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Styled from 'styled-components';
import { setCard } from 'state/modules/app';
import { Subject as SubjectType, Chart } from 'types';
import Card from 'components/modules/Card';
import Subject from 'pages/Posts/_id/Subject';
import * as styles from './styles';
import GunttChart from './GunttChart';
import PieChart from './PieChart';

// component root class name
const CLASSNAME = 'Chart';

// declare types
interface ComponentProps {
  editable?: boolean;
  subjects: SubjectType[];
  className?: string;
  openEditModal?: (i: number | null) => void;
}

interface Props extends ComponentProps {
  chartType: Chart;
  currentSubject: number | null;
  changeChartType: (type: Chart) => void;
  showSubjectDetail: (i: number) => void;
}

// dom component
const Component: React.FC<Props> = (props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="panel">
      {(() => {
        switch (props.chartType) {
          case 'pie':
            return (
              <PieChart
                className="chart"
                subjects={props.subjects}
                onChangeChartType={props.changeChartType}
                onClickSubject={props.showSubjectDetail}
              />
            );
          default:
            return (
              <GunttChart
                className="chart"
                subjects={props.subjects}
                editable={props.editable}
                onClickSubject={props.showSubjectDetail}
                onChangeChartType={props.changeChartType}
                onEdit={props.openEditModal && props.openEditModal}
              />
            );
        }
      })()}
    </div>
    <Card cardName="subject">
      {props.currentSubject !== null && <Subject subject={props.subjects[props.currentSubject]} />}
    </Card>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`

  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const dispatch = useDispatch();
  const [chartType, setChartType] = useState<Chart>('guntt');
  const [currentSubject, setCurrentSubject] = useState<number | null>(null);

  const changeChartType = (type: Chart) => {
    setChartType(type);
  };

  const showSubjectDetail = (i: number) => {
    setCurrentSubject(i);
    dispatch(setCard('subject'));
  };

  const props = { chartType, currentSubject, changeChartType, showSubjectDetail };

  return <StyeldComponent {...componentProps} {...props} />;
};
export default Container;
