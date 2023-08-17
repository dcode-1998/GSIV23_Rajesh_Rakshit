import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieDetails } from '../../state-management/slices/movieList';
import { movieList } from '../../state-management/apis/movieListingAPI';

import MovieCard from '../shared/movie-card';

import './index.css';
const MoviesList = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const initialState = { moviesList: [], page: 1, showSearch: true, searchKey: '' };
  const [state, updateState] = useReducer((prev, next) => {
    let updateState = { ...prev, ...next };
    return updateState;
  }, initialState);

  useEffect(() => {
    dispatch(movieList(state.page));
    fetchMovies();
  }, [state.page]);

  useEffect(() => {
    if (!location.pathname.includes('movies-list')) {
      updateState({ showSearch: false });
    }
  }, [location.pathname]);

  const fetchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${state.page}`
    );
    let moviesList = [...state.moviesList, ...response.data.results];
    updateState({ moviesList });
  };

  const searchMovies = searchData => {
    updateState({ searchKey: searchData });
  };

  const onClick = data => {
    console.log('data: ', data);
    dispatch(setMovieDetails(data));
    navigate('../movie-details', { state: { showDetailsHeader: true } });
  };
  return (
    <div className='layout'>
      <div className='header'>
        {state.showSearch && (
          <div className='search_container'>
            <input
              value={state.searchKey}
              onChange={e => {
                searchMovies(e.target.value);
              }}
              type='text'
              placeholder='Search Movies'
            />
          </div>
        )}
        <div className='home_btn'></div>
      </div>
      <div className='movies_list_container'>
        {state.moviesList.map(item => (
          <MovieCard key={item.id} data={item} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
