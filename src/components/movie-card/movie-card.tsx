import React from 'react';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {Movie} from '../../types';

interface MovieCardProps {
  movie: Movie;
  onCardHover: (id: number) => void;
  onCardLeave: () => void;
  isActive: boolean;
  isPlaying: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({movie, onCardHover, onCardLeave, isPlaying}) => {
  const {title, previewImage, trailer} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onCardHover(movie.id);
      }}
      onMouseOut={() => {
        onCardLeave();
      }}
    >
      <Link
        className="small-movie-card__image"
        to={`/films/${movie.id}`}
      >
        <VideoPlayer
          poster={previewImage}
          src={trailer}
          isPlaying={isPlaying}
        />
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/${movie.id}`}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

export default MovieCard;
