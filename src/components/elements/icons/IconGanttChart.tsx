import Styled from 'styled-components';
import { IoStatsChartSharp } from "react-icons/io5";

const IconGanttChart = () => {
  return <Wrapper>
    <IoStatsChartSharp />
  </Wrapper>;
}

const Wrapper = Styled.div`
  transform-origin: center;
  transform: rotate(90deg) scale(.9);
`;

export default IconGanttChart;