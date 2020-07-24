import {movies} from '../mocks/films';
import {RootState, Action} from '../types';

const initialState: RootState = {
  movies,
  activeGenre: null,
};

const ActionCreator = {
  setGenre: (genre: string): Action => ({
    type: `SET_GENRE`,
    payload: genre,
  }),
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case `SET_GENRE`:
      const activeGenre = action.payload;
      return {...state, activeGenre};
  }

  return state;
};


export {reducer, ActionCreator, initialState};

