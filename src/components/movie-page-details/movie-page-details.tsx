import React from 'react';
import {Movie} from '../../types';

interface MoviePageDetailsProps {
  movie: Movie;
}

const MoviePageDetails: React.FC<MoviePageDetailsProps> = ({movie}) => {
  const {
    director,
    cast,
    genre,
    year,
    duration,
  } = movie;
  const castString = cast.join(`\n`);

  const hoursString = duration.hours() ? `${duration.hours()}h ` : ``;
  const minutesString = duration.minutes() ? `${duration.minutes()}m` : ``;
  const durationString = `${hoursString}${minutesString}`;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {castString}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{durationString}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};

export default MoviePageDetails;
