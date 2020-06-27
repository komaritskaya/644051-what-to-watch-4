import React from 'react';
import {Movie} from '../../types';

interface MovieCardProps {
  movie: Movie;
  onTitleClick: () => void;
  onCardHover: (id: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({movie, onTitleClick, onCardHover}: MovieCardProps) => {
  const {title, poster} = movie;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onCardHover(movie.id)}
    >
      <div className="small-movie-card__image">
        <img src={`img/${poster}`} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onTitleClick}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

export default MovieCard;
