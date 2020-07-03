import axios from 'axios';

import { threatData } from '~/utils/data';

const api = axios.create({
  baseURL: 'https://randamovie.herokuapp.com'
});

const getMovieApi = async (data, setLoading, setMovie) => {
  await api.post('/discoveries', data).then(async (res) => {
    const {
      backdrop_path,
      poster_path,
      overview
    } = res.data;
    if (backdrop_path && poster_path && overview) {
      setLoading(false);

      setMovie(await threatData(res.data));
    }
  });
};

export { getMovieApi };
