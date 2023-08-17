import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieListingData: {},
  movieDetails: {}
};

export const MovieListingSlice = createSlice({
  name: 'Movie Browser',
  initialState,
  reducers: {
    setMoviesList: (state, { payload }) => {
      console.log('payload:listing ', payload);
      return {
        ...state,
        movieListingData: payload
      };
    },
    setMovieDetails: (state, { payload }) => {
      console.log('payload:movie details ', payload);
      return {
        ...state,
        movieDetails: payload
      };
    }
  }
});

export const { setMoviesList, setMovieDetails } = MovieListingSlice.actions;
export default MovieListingSlice.reducer;
