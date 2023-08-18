import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieDetails, setMoviesList } from '../../state-management/slices/movieList';
import { movieDetails } from '../../state-management/apis/movieDetailsAPI';
import { movieList, movieListSearch } from '../../state-management/apis/movieListingAPI';

import MovieCard from '../shared/movie-card';

import './index.css';
const MoviesList = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const movieListData = useSelector(state => state.movieBrowser.movieListingData);
  console.log('listdata', movieListData);
  const initialState = { moviesList: [], page: 1, showSearch: true, searchKey: '' };
  const [state, updateState] = useReducer((prev, next) => {
    let updateState = { ...prev, ...next };
    return updateState;
  }, initialState);

  useEffect(() => {
    let params = {
      page: state.page,
      searchKey: state.searchKey
    };
    dispatch(movieList(params));
    let moviesList = [...state.moviesList, ...movieListData.results];
    updateState({ moviesList });
    // fetchMovies();
  }, [state.page]);

  useEffect(() => {
    let params = {
      page: 1,
      searchKey: state.searchKey
    };
    dispatch(movieListSearch(params));
    let moviesList = [...movieListData.results];
    updateState({ moviesList });
  }, [state.searchKey]);

  useEffect(() => {
    if (!location.pathname.includes('movies-list')) {
      updateState({ showSearch: false });
    }
  }, [location.pathname]);

  const searchMovies = searchData => {
    updateState({ searchKey: searchData });
  };

  const onClick = data => {
    dispatch(movieDetails(data));
    navigate('../movie-details', { state: { showDetailsHeader: true } });
  };

  document.getElementById('movielist_container')?.addEventListener('scroll', () => {
    let target = document.querySelector('#movielist_container');
    let clientHeight = target?.clientHeight;
    let scrollHeight = target?.scrollHeight;
    let scrollTop = target?.scrollTop;
    console.log(clientHeight, scrollTop, scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      updateState({ page: state.page + 1 });
    }
  });
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
      <div id='movielist_container' className='movies_list_container'>
        {state.moviesList.map(item => (
          <MovieCard key={item.id} data={item} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
