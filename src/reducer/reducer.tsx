import {movies} from '../mocks/films';
import {RootState, Action} from '../types';

const initialState: RootState = {
  movies,
  filter: null,
};

const ActionCreator = {
  setFilter: (filter: string): Action => ({
    type: `SET_FILTER`,
    payload: filter,
  }),
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case `SET_FILTER`:
      const filter = action.payload;
      return {...state, filter};
  }

  return state;
};


export {reducer, ActionCreator, initialState};

