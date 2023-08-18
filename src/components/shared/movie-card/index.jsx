import React from 'react';
import './index.css';
const MovieCard = props => {
  return (
    <div
      className='movie_card_container'
      onClick={() => {
        props.onClick(props.data.id);
      }}
    >
      <img
        className='movie_poster_container'
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.data.poster_path}`}
        alt='img'
      />
      <div className='movie_description'>
        <div className='movie_title_rating'>
          <div className='movie_title'>{props.data.title}</div>
          <div className='movie_rating'>{`IMDB-${props.data.vote_average}`}</div>
        </div>
        <div className='movie_details'>{props.data.overview}</div>
      </div>
    </div>
  );
};

export default MovieCard;
