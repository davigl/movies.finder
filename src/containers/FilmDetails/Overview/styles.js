import { Circle } from 'rc-progress';
import styled from 'styled-components';

import { colors } from '~/assets/styles/partials/_variables';

export const OverviewDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 120px;

  padding: 15px;

  box-sizing: border-box;

  background-color: ${colors.purpleDark};
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 5px;

  span > svg > &:first-child {
    color: ${colors.yellow};
  }
`;

export const AverageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 57px;
  height: 57px;
  background-color: ${colors.cyanDark};

  span {
    font-size: 0.9rem;
    font-weight: bold;
    z-index: 2;
  }
`;

export const Average = styled(Circle)`
  position: absolute;

  width: 50px;
  height: 50px;
`;
