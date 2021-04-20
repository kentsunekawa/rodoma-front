import React from 'react';
import Styled from 'styled-components';
import { AiOutlineRadarChart } from 'react-icons/ai';

const IconRaderChart: React.FC = () => {
  return (
    <Wrapper>
      <AiOutlineRadarChart />
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  transform-origin: center;
  transform: scale(1.2) translateY(-.05em);
`;

export default IconRaderChart;
