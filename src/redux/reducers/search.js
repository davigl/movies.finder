import { SET_GENRE, SET_YEAR } from '~/redux/actions/search';

const INITIAL_VALUE = {
  genre: 28,
  year: 2020
};

const SearchReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case SET_GENRE:
      return { ...state, genre: action.value };
    case SET_YEAR:
      return { ...state, year: action.value };
    default:
      return state;
  }
};

export default SearchReducer;
