import React from 'react';

import Overview from './Overview';
import Resume from './Resume';
import Tags from './Tags';

export default function FilmDetails({
  budget, genres, voteAverage,
  color, timer, description
}) {
  return (
    <>
      <Tags genres={genres} />
      <Overview
        voteAverage={voteAverage}
        color={color}
        timer={timer}
        budget={budget}
      />
      <Resume description={description} />
    </>
  );
}
