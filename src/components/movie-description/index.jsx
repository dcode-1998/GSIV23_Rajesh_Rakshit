import { useReducer, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useLocation } from 'react-router-dom';

import HomeIcon from '../../resource/icons/home-icon.svg';

import './index.css';
const MovieDetails = () => {
  const movieDetails = useSelector(state => state.movieBrowser.movieDetails);
  console.log(movieDetails);
  const location = useLocation();

  const [showMovieDetailsHeader, setShowSearch] = useState(location.state.showDetailsHeader);

  return (
    <div className='layout'>
      <div className='header'>
        {showMovieDetailsHeader && <div className='search_container'>Movie Details</div>}
        <div className='home_btn'>
          <img src={HomeIcon} alt='home-icon' />
        </div>
      </div>
      <div className='movie_details_container'>
        <span>
          <img
            className='movie_details_poster'
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieDetails.poster_path}`}
          />
        </span>
        <span>
          <div>
            <div className='movie_details_title'>
              {`${movieDetails.original_title}`}
              <span className='rating_details'>
                {' '}
                (IMDB- {`${Math.round(movieDetails.vote_average * 10) / 10}`})
              </span>
            </div>
            <div>
              <span>{`${movieDetails.release_date}`}</span>
              <span>
                {' '}
                | {`${Math.floor(movieDetails.runtime / 60)}h${movieDetails.runtime % 60}min`}
              </span>
              <span></span>
            </div>
            <div>{movieDetails.overview}</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MovieDetails;
