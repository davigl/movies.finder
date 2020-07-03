import React from 'react';

import {
  faClock, faStar, faArrowLeft, faPlay, faMoneyBill
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LogoImdb from '~/assets/images/logo-imdb.png';
import Button from '~/components/Button';
import Tag from '~/components/Tag';

import * as Styled from './styles';

export default function FilmCard({
  title, year, description, align, thumbnail, genres, trailer, timer, hex,
  voteAverage, budget, imdbPath
}) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Styled.Wrapper>
      <Styled.WrapperCard align={align} background={thumbnail}>
        <Styled.BackLink to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Styled.BackLink>
      </Styled.WrapperCard>
      <Styled.Details>
        <h1>{title}
          <span> ({year})</span>
          <a
            href={imdbPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LogoImdb} alt="An imdb logo" />
          </a>
        </h1>
        <Styled.TagsContainer>
          {genres && genres.map((genre) => (
            <Tag key={genre.id}>{genre.name}</Tag>
          ))}
        </Styled.TagsContainer>
        <Styled.OverviewWrapper hex={hex}>
          <h3>Overview</h3>
          <Styled.OverviewDetailsWrapper>
            <Styled.Group>
              <span> Popularity <FontAwesomeIcon icon={faStar} /></span>
              <Styled.AverageWrapper>
                <Styled.Average
                  percent={voteAverage}
                  strokeWidth="11"
                  trailWidth="9"
                  trailColor="#204529"
                  strokeColor={voteAverage < 60 ? (voteAverage < 40 ? '#ad0c2c' : '#cacc6a') : '#20C774'}
                />
                <span>{voteAverage}%</span>
              </Styled.AverageWrapper>
            </Styled.Group>
            <Styled.Group>
              <span>Duration<FontAwesomeIcon icon={faClock} /></span>
              <p>{timer}</p>
            </Styled.Group>

            {budget > 0
            && (
            <Styled.Group>
              <span>Budget<FontAwesomeIcon icon={faMoneyBill} /></span>
              <p>$ {budget}</p>
            </Styled.Group>
            )}
          </Styled.OverviewDetailsWrapper>
          <h3>Resume</h3>
          <p>
            {description}
          </p>
        </Styled.OverviewWrapper>
        <Styled.ButtonsWrapper>
          { trailer && <Button background="#c4302b" title="Watch Trailer" icon={faPlay} path={trailer} /> }
          <Styled.Refresh onClick={refreshPage}> Find Another </Styled.Refresh>
        </Styled.ButtonsWrapper>
      </Styled.Details>
    </Styled.Wrapper>
  );
}
