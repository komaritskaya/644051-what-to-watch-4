import React from 'react';
import {Movie} from '../../types';

interface MovieCardProps {
  movie: Movie;
  onCardClick: (id: string) => void;
  onCardHover: (id: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({movie, onCardClick, onCardHover}: MovieCardProps) => {
  const {title, poster} = movie;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onCardHover(movie.id)}
    >
      <div
        className="small-movie-card__image"
        onClick={() => onCardClick(movie.id)}
      >
        <img src={`img/${poster}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="#"
          onClick={() => onCardClick(movie.id)}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

export default MovieCard;
