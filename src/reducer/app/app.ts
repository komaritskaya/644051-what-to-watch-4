import {AppState, AppAction} from '../../types';
import {MOVIES_COUNT} from '../../const';

const initialState: AppState = {
  activeGenre: null,
  shownMoviesCount: MOVIES_COUNT,
};

const ActionCreator = {
  setGenre: (genre: string): AppAction => ({
    type: `SET_GENRE`,
    payload: genre,
  }),
  addShownMovies: (count: number): AppAction => ({
    type: `ADD_SHOWN_MOVIES`,
    payload: count,
  }),
  resetShownMovies: (): AppAction => ({
    type: `RESET_SHOWN_MOVIES`,
  }),
};

const reducer = (state = initialState, action: AppAction) => {
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
