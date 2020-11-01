import React from 'react';

import { Tabs, Panel } from '@bumaga/tabs';

import FilmActions from '~/containers/FilmActions';
import FilmCover from '~/containers/FilmCover';
import FilmDetails from '~/containers/FilmDetails';
import FilmLinks from '~/containers/FilmLinks';
import FilmTabs from '~/containers/FilmTabs';

import {
  Wrapper, Details, OverviewWrapper, FilmTitle, FilmYear
} from './styles';

export default function FilmCard({
  title, year, description, align, thumbnail, genres, trailer, timer, hex,
  voteAverage, budget, imdbPath
}) {
  const color = voteAverage < 60 ? (voteAverage < 40 ? '#ad0c2c' : '#cacc6a') : '#20C774';

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Wrapper>
      <FilmCover thumbnail={thumbnail} align={align} />
      <Details>
        <FilmTitle>{title}
          <FilmYear> ({year})</FilmYear>
        </FilmTitle>
        <FilmLinks imdbPath={imdbPath} />
        <Tabs>
          <OverviewWrapper hex={hex}>
            <FilmTabs />
            <Panel>
              <FilmDetails
                budget={budget}
                genres={genres}
                voteAverage={voteAverage}
                color={color}
                timer={timer}
                description={description}
              />
            </Panel>
            <Panel>
              a
            </Panel>
            <Panel>
              a
            </Panel>
          </OverviewWrapper>
        </Tabs>
        <FilmActions trailer={trailer} refreshPage={refreshPage} />
      </Details>
    </Wrapper>
  );
}
