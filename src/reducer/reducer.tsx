import {movies} from '../mocks/films';
import {RootState, Action} from '../types';
import {MOVIES_COUNT} from '../const';

const initialState: RootState = {
  movies,
  activeGenre: null,
  shownMoviesCount: MOVIES_COUNT,
};

const ActionCreator = {
  setGenre: (genre: string): Action => ({
    type: `SET_GENRE`,
    payload: genre,
  }),
  addShownMovies: (count: number): Action => ({
    type: `ADD_SHOWN_MOVIES`,
    payload: count,
  }),
  resetShownMovies: (): Action => ({
    type: `RESET_SHOWN_MOVIES`,
  }),
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case `SET_GENRE`:
      const activeGenre = action.payload;
      return {...state, activeGenre};
    case `ADD_SHOWN_MOVIES`:
      const shownMoviesCount = state.shownMoviesCount + (action.payload as number);
      return {...state, shownMoviesCount};
    case `RESET_SHOWN_MOVIES`:
      return {...state, shownMoviesCount: MOVIES_COUNT};
  }

  return state;
};


export {reducer, ActionCreator, initialState};

