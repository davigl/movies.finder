export const SET_GENRE = 'SET_GENRE';
export const SET_YEAR = 'SET_YEAR';

export const setGenre = (dispatch, value) => {
  dispatch({ type: SET_GENRE, value });
};

export const setYear = (dispatch, value) => {
  dispatch({ type: SET_YEAR, value });
};
