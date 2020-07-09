import React from 'react';
import moment from 'moment';
import nanoid from 'nanoid';
import {Movie, Comment} from '../../types';

interface MoviePageReviewsProps {
  movie: Movie;
}

const MoviePageReviews: React.FC<MoviePageReviewsProps> = ({movie}) => {
  const {comments} = movie;

  const renderCommentsColumn = (commentsArray: Comment[]) => {
    return (
      <React.Fragment>
        {commentsArray.map((comment) => (
          <div className="review" key={nanoid()} >
            <blockquote className="review__quote">
              <p className="review__text">{comment.text}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user}</cite>
                <time className="review__date" dateTime="2016-12-24">{moment(comment.date).format(`DD MMMM, YYYY`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rate}</div>
          </div>
        ))}
      </React.Fragment>
    );
  };

  const middleCommentsIndex = comments.length / 2;
  const firstCommentsArray = comments.slice(0, middleCommentsIndex);
  const secondCommentsArray = comments.slice(middleCommentsIndex);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderCommentsColumn(firstCommentsArray)}
      </div>
      <div className="movie-card__reviews-col">
        {renderCommentsColumn(secondCommentsArray)}
      </div>
    </div>
  );
};

export default MoviePageReviews;
