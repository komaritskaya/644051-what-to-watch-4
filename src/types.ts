import moment from 'moment';
export interface Comment {
  id: string;
  user: string;
  date: Date;
  text: string;
  rate: number;
}

export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  poster: string;
  previewImage: string;
  cover: string;
  background: string;
  director: string;
  cast: string[];
  description: string;
  duration: moment.Duration;
  trailer: string;
  video: string;
  isFavorite: boolean;
  rating: number;
  scoresCount: number;
}

export interface AppState {
  activeGenre: string;
  shownMoviesCount: number;
}

export interface DataState {
  movies: Movie[];
}

export interface UserState {
  authorizationStatus: string;
}

export interface AppAction {
  type: `SET_GENRE` | `ADD_SHOWN_MOVIES`| `RESET_SHOWN_MOVIES` | `ERROR`;
  payload?: unknown;
}

export interface DataAction {
  type: `LOAD_MOVIES` | `ERROR`;
  payload?: unknown;
}

export interface UserAction {
  type: `REQUIRE_AUTHORIZATION` | `ERROR`;
  payload?: unknown;
}
