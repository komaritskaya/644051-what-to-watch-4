import React from 'react';
import VideoPlayer from '../video-player/video-player';
import {Movie} from '../../types';
import {VIDEO_PLAYER_TIMEOUT} from '../../const';

interface MovieCardProps {
  movie: Movie;
  onCardClick: (id: string) => void;
  onCardHover: (id: string) => void;
  onCardLeave: () => void;
  isActive: boolean;
}

interface MovieCardState {
  isPlaying: boolean;
}

class MovieCard extends React.PureComponent<MovieCardProps, MovieCardState> {
  constructor(props: MovieCardProps) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._timeout = null;
  }

  private _timeout: NodeJS.Timeout;

  render() {
    const {movie, onCardClick, onCardHover, onCardLeave} = this.props;
    const {title, poster, trailer} = movie;
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
        <div
          className="small-movie-card__image"
          onClick={() => onCardClick(movie.id)}
        >
          <VideoPlayer
            poster={poster}
            src={trailer}
            isPlaying={this.state.isPlaying}
          />
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
  }

  componentDidUpdate() {
    if (this.props.isActive) {
      this._timeout = setTimeout(() => {
        this.setState({
          isPlaying: true,
        });
      }, VIDEO_PLAYER_TIMEOUT);
    } else {
      clearTimeout(this._timeout);
      this.setState({
        isPlaying: false,
      });
    }
  }
}

export default MovieCard;
