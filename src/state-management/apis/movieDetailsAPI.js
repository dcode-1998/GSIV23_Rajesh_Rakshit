import axios from 'axios';
import { setMovieDetails } from '../slices/movieList';

import { CONSTANTS } from '../../utils/constants';
import ErrorHandler from '../../utils/error_handler';

export const movieDetails = input => async dispatch => {
  try {
    for (let key in input) {
      if (input[key] === '' || input[key] === undefined || input[key] === null) {
        delete input[key];
      }
    }

    const response = await axios.get(
      `${CONSTANTS.MOVIE_API}/${CONSTANTS.API_VERSION}/movie/${input}`
    );
    dispatch(setMovieDetails(response.data));
  } catch (err) {
    ErrorHandler(err);
  }
};
