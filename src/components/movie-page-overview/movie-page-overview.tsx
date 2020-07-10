import React from 'react';
import nanoid from 'nanoid';
import {Movie} from '../../types';

interface MoviePageOverviewProps {
  movie: Movie;
}

const getMovieRatingDescription = (rating) => {
  if (rating < 3) {
    return `Bad`;
  } else if (rating < 5) {
    return `Normal`;
  } else if (rating < 8) {
    return `Good`;
  } else if (rating < 10) {
    return `Very good`;
  } else if (rating === 10) {
    return `Awesome`;
  } else {
    return `No rating`;
  }
};

const MoviePageOverview: React.FC<MoviePageOverviewProps> = ({movie}) => {
  const {
    director,
    cast,
    description,
    comments,
  } = movie;
  const castString = cast.join(`, `);
  const descriptionMarkup = description.split(`\n`).map((paragraph) => <p key={nanoid()}>{paragraph}</p>);

  const rating = ((comments.map((comment) => Number(comment.rate)).reduce((a, b) => a + b)) / comments.length).toFixed(1);
  const ratingString = rating.toString().replace(`.`, `,`);
  const ratingDescription = getMovieRatingDescription(rating);
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingString}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescription}</span>
          <span className="movie-rating__count">{comments.length} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {descriptionMarkup}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {castString} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

export default MoviePageOverview;
