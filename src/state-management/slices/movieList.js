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
      return {
        ...state,
        movieListingData: payload
      };
    },
    setMovieDetails: (state, { payload }) => {
      return {
        ...state,
        movieDetails: payload
      };
    }
  }
});

export const { setMoviesList, setMovieDetails } = MovieListingSlice.actions;
export default MovieListingSlice.reducer;
