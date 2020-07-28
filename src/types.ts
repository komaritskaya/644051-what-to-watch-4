import moment from 'moment';
export interface Comment {
  id: string;
  user: string;
  date: Date;
  text: string;
  rate: number;
}

export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  poster: string;
  cover: string;
  director: string;
  cast: string[];
  description: string;
  trailer: string;
  duration: moment.Duration;
  comments: Comment[];
}

export interface RootState {
  movies: Movie[];
  activeGenre: string;
  shownMoviesCount: number;
}

export interface Action {
  type: `SET_GENRE` | `ADD_SHOWN_MOVIES`| `RESET_SHOWN_MOVIES` | `ERROR`;
  payload?: unknown;
}
