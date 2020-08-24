import React from 'react';
import { FaStar, FaClock, FaMoneyBill } from 'react-icons/fa';

import TitleFilmDetails from '~/components/TitleFilmDetails';

import {
  OverviewDetailsWrapper, Group, AverageWrapper, Average
} from './styles';

export default function Overview({
  voteAverage, color, timer, budget
}) {
  return (
    <>
      <TitleFilmDetails>Overview</TitleFilmDetails>
      <OverviewDetailsWrapper>
        <Group>
          <span> Popularity <FaStar /></span>
          <AverageWrapper>
            <Average
              percent={voteAverage}
              strokeWidth="11"
              trailWidth="9"
              trailColor="#204529"
              strokeColor={color}
            />
            <span>{voteAverage}%</span>
          </AverageWrapper>
        </Group>
        <Group>
          <span>Duration <FaClock /></span>
          <p>{timer}</p>
        </Group>
        {budget > 0
        && (
        <Group>
          <span>Budget <FaMoneyBill /></span>
          <p>$ {budget}</p>
        </Group>
        )}
      </OverviewDetailsWrapper>
    </>
  );
}
