import axios from 'axios';
import { setMoviesList } from '../slices/movieList';

import { CONSTANTS } from '../../utils/constants';
import ErrorHandler from '../../utils/error_handler';

export const movieList = input => async dispatch => {
  try {
    for (let key in input) {
      if (input[key] === '' || input[key] === undefined || input[key] === null) {
        delete input[key];
      }
    }

    const response = await axios.get(
      `${CONSTANTS.MOVIE_API}${CONSTANTS.API_VERSION}/movie/upcoming?language=en-US&page=${input.page}`
    );
    dispatch(setMoviesList(response.data));
  } catch (err) {
    ErrorHandler(err);
  }
};

export const movieListSearch = input => async dispatch => {
  try {
    for (let key in input) {
      if (input[key] === '' || input[key] === undefined || input[key] === null) {
        delete input[key];
      }
    }

    const response = await axios.get(
      `${CONSTANTS.MOVIE_API}${CONSTANTS.API_VERSION}${
        input.searchKey ? '/search' : ''
      }/movie?language=en-US${input.searchKey ? `&query=${input.searchKey}` : ''}&page=${
        input.page
      }`
    );
    dispatch(setMoviesList(response.data));
  } catch (err) {
    ErrorHandler(err);
  }
};
