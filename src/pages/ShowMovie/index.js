import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '~/components/Spinner';
import FilmCard from '~/containers/FilmCard';
import { getMovieApi } from '~/services/movies-api';
import { getDominantColor } from '~/utils/colors';

import * as Styled from './styles';


export default function ShowMovie() {
  const options = useSelector((state) => state.search);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [hexColor, setHexColor] = useState([]);

  useEffect(() => {
    async function getColor() {
      const { Vibrant } = await getDominantColor(movie.backdropPath);
      const color = `rgba(${Vibrant.rgb[0]}, ${Vibrant.rgb[1]}, ${Vibrant.rgb[2]}, .6)`;

      setHexColor(color);
    }

    if (movie.backdropPath) {
      getColor();
    }
  }, [movie]);

  useEffect(() => {
    const data = { ...options, language: 'en-US' };

    async function getMovie() {
      await getMovieApi(data, setLoading, setMovie);
    }

    getMovie();
  }, [options]);

  return (
    <>
      <Spinner loading={loading} />
      {!loading
      && (
      <Styled.Wrapper thumbnail={movie.backdropPath} hex={hexColor}>
        <FilmCard
          align="center"
          thumbnail={movie.posterPath}
          title={movie.title}
          year={options.year}
          description={movie.overview}
          genres={movie.genres}
          trailer={movie.trailer}
          timer={movie.timer}
          hex={hexColor}
          voteAverage={movie.voteAverage}
          budget={movie.budget}
          imdbPath={movie.imdbPath}
        />
      </Styled.Wrapper>
      )}
    </>
  );
}
