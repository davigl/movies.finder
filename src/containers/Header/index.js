import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useDispatch } from 'react-redux';

import moviePhoto from '~/assets/images/movie.png';
import genres from '~/mocks/genres';
import years from '~/mocks/years';
import { setYear, setGenre } from '~/redux/actions/search';

import * as Styled from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const yearsOptions = years.map((year) => <option value={year} key={year}>{year}</option>);
  const genresOptions = genres.map((genre) => <option key={genre.id} value={genre.id}>{genre.name}</option>);

  return (
    <Styled.Wrapper>
      <div>
        <h1>O que vamos assistir hoje?</h1>
        <p>Cansado de assistir os mesmos filmes e deseja encontrar algo novo? </p>
        <Styled.GridOptions>
          <h6>Gênero</h6>
          <h6>Ano</h6>
        </Styled.GridOptions>
        <Styled.GridOptions>
          <Styled.Select onChange={(e) => { setGenre(dispatch, e.target.value); }}>
            {genresOptions}
          </Styled.Select>
          <Styled.Select onChange={(e) => { setYear(dispatch, e.target.value); }}>
            {yearsOptions}
          </Styled.Select>
        </Styled.GridOptions>
        <Styled.SearchButton path="/random-movie">Buscar</Styled.SearchButton>
      </div>
      <LazyLoad height="500" debounce>
        <img src={moviePhoto} alt="People Celebrating Movie" />
      </LazyLoad>
    </Styled.Wrapper>
  );
}
