import axios from 'axios';
import { setMovieDetails } from '../slices/movieList';

import { CONSTANTS } from '../../utils/constants';
import ErrorHandler from '../../utils/error_handler';

const searchAPI = 'https://api.themoviedb.org/3/search/movie?language=en-US&query=spiderman';

export const movieDetails = input => async dispatch => {
  console.log(input);
  try {
    for (let key in input) {
      if (input[key] === '' || input[key] === undefined || input[key] === null) {
        delete input[key];
      }
    }

    const response = await axios.get(
      `${CONSTANTS.MOVIE_API}/${CONSTANTS.API_VERSION}/movie/${input}`
    );
    console.log('response: ', response.data);
    dispatch(setMovieDetails(response.data));
  } catch (err) {
    console.log('err: ', err);
    ErrorHandler(err);
  }
};
