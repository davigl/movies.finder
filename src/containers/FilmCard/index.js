import React from 'react';

import { Tabs, Tab, Panel } from '@bumaga/tabs';
import {
  faClock, faStar, faArrowLeft, faPlay, faMoneyBill, faRedo, faInfoCircle,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LogoImdb from '~/assets/images/logo-imdb.png';
import LogoParentsGuide from '~/assets/images/parents-guide-3.png';
import Button from '~/components/Button';
import Tag from '~/components/Tag';

import * as Styled from './styles';

export default function FilmCard({
  title, year, description, align, thumbnail, genres, trailer, timer, hex,
  voteAverage, budget, imdbPath
}) {
  const color = voteAverage < 60 ? (voteAverage < 40 ? '#ad0c2c' : '#cacc6a') : '#20C774';

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
        </h1>
        <Styled.LinksWrapper>
          {imdbPath
            && (
              <>
                <a
                  href={imdbPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LogoImdb} alt="An imdb logo" />
                </a>
                <a
                  href={`${imdbPath}/parentalguide`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LogoParentsGuide} alt="An imdb logo for parents guide" />
                </a>
              </>
            )}
        </Styled.LinksWrapper>
        <Tabs>
          <Styled.OverviewWrapper hex={hex}>
            <Styled.BackgroundTabs>
              <Styled.TabsWrapper>
                <Tab>
                  <Styled.ButtonTab isActive>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <span>Details</span>
                  </Styled.ButtonTab>
                </Tab>
                <Tab>
                  <Styled.ButtonTab isActive>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <span>Details</span>
                  </Styled.ButtonTab>
                </Tab>
                <Tab>
                  <Styled.ButtonTab isActive>
                    <FontAwesomeIcon icon={faComment} />
                    <span>Reviews</span>
                  </Styled.ButtonTab>
                </Tab>
              </Styled.TabsWrapper>
            </Styled.BackgroundTabs>
            <Panel>
              <h3>Tags</h3>
              <Styled.TagsContainer>
                {genres && genres.map((genre) => (
                  <Tag key={genre.id}>{genre.name}</Tag>
                ))}
              </Styled.TagsContainer>
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
                      strokeColor={color}
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
            </Panel>
            <Panel>
              a
            </Panel>
          </Styled.OverviewWrapper>
        </Tabs>
        <Styled.ButtonsWrapper>
          <Styled.Refresh onClick={refreshPage}> Find Another <FontAwesomeIcon icon={faRedo} /> </Styled.Refresh>
          { trailer && <Button background="#c4302b" title="Watch Trailer" icon={faPlay} path={trailer} /> }
        </Styled.ButtonsWrapper>
      </Styled.Details>
    </Styled.Wrapper>
  );
}
