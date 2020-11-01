const BASE_ORIGINAL_URL = 'https://image.tmdb.org/t/p/original';
const BASE_POSTER_PATH = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
const BASE_YOUTUBE_URL = 'https://www.youtube.com/embed/';

function formatBudget(budget) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(budget);
}

function formatTimer(runtime) {
  const hours = parseInt(runtime / 60, []);
  const minutes = runtime % 60;
  const formatedTime = `${hours}h ${minutes < 10 ? `0${minutes}` : minutes}m`;

  return formatedTime;
}

function getTrailer(videos) {
  const movie = videos.find((video) => video.type === 'TRAILER');

  if (movie) {
    return movie.key;
  }

  return movie;
}

function threatData(data) {
  const output = {
    title: data.title,
    backdropPath: '',
    posterPath: '',
    trailer: '',
    overview: data.overview,
    genres: data.genres,
    timer: formatTimer(data.runtime),
    voteAverage: parseInt(data.vote_average * 10, []),
    budget: formatBudget(data.budget),
    imdbPath: `https://www.imdb.com/title/${data.imdb_id}`
  };
  const trailerPath = getTrailer(data.videos.results);

  output.backdropPath = `${BASE_ORIGINAL_URL}${data.backdrop_path}`;
  output.posterPath = `${BASE_POSTER_PATH}${data.poster_path}`;
  output.trailer = trailerPath ? `${BASE_YOUTUBE_URL}${trailerPath}?modestbranding=1` : trailerPath;

  return output;
}

export { threatData };
