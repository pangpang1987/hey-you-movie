import axios from 'axios';
import { API_ROOT, API_KEY } from '../../../config';

// ------------------------------------
// Constants
// ------------------------------------

const SEARCH_MOVIES = 'search/SEARCH_MOVIES';

// ------------------------------------
// Apis
// ------------------------------------

const endpoints = {
  search: `${API_ROOT}/search/movie`
};

const Api = {
  searchMovies: keyword => {
    return axios.get(endpoints.search, {
      params: {
        api_key: API_KEY,
        query: keyword,

      }
    }).then(({ data }) => data);
  }
};

// ------------------------------------
// Actions
// ------------------------------------

export const searchMovies = keyword => ({
  type: SEARCH_MOVIES,
  payload: Api.searchMovies(keyword)
});

export const actions = {
  searchMovies
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  total: 0,
  totalPages: 0,
  currentPage: 0,
  isSearching: false,
  movies: []
};
const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${SEARCH_MOVIES}_PENDING`:
      return Object.assign({}, state, {
        isSearching: true
      });
    case `${SEARCH_MOVIES}_REJECTED`:
      return Object.assign({}, state, {
        isSearching: false
      });
    case `${SEARCH_MOVIES}_FULFILLED`:
      return Object.assign({}, state, {
        isSearching: false,
        movies: action.payload.results,
        currentPage: action.payload.page,
        total: action.payload.total_results,
        totalPages: action.payload.total_pages
      });
    default:
      return state;
  }
};

export default searchReducer;

searchReducer.reducer = 'search';
