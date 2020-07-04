import React, { useRef } from 'react';
import LazyLoad from 'react-lazy-load';
import { useDispatch } from 'react-redux';

import moviePhoto from '~/assets/images/movie.png';
import genres from '~/mocks/genres';
import years from '~/mocks/years';
import { setYear, setGenre } from '~/redux/actions/search';

import * as Styled from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const yearRef = useRef(null);
  const genreRef = useRef(null);
  const yearsOptions = years().map((year) => <option value={year} key={year}>{year}</option>);
  const genresOptions = genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>);

  function updateSearch() {
    setGenre(dispatch, genreRef.current.value);
    setYear(dispatch, yearRef.current.value);
  }

  return (
    <Styled.Wrapper>
      <div>
        <h1>What are we going to watch today?</h1>
        <p>Tired of watching the same old movies and want to find something new? </p>
        <Styled.GridOptions>
          <h6>Genre</h6>
          <h6>Year</h6>
        </Styled.GridOptions>
        <Styled.GridOptions>
          <Styled.Select ref={genreRef}>
            {genresOptions}
          </Styled.Select>
          <Styled.Select ref={yearRef}>
            {yearsOptions}
          </Styled.Select>
        </Styled.GridOptions>
        <Styled.SearchButton onClick={updateSearch} path="/random-movie">Search</Styled.SearchButton>
      </div>
      <LazyLoad height="500" debounce>
        <img src={moviePhoto} alt="People Celebrating Movie" />
      </LazyLoad>
    </Styled.Wrapper>
  );
}
