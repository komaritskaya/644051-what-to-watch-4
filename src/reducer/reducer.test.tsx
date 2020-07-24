import {reducer, ActionCreator} from './reducer';
import {Action} from '../types';
import {movies} from '../mocks/test-data';

const initialState = {
  movies,
  activeGenre: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {type: `ERROR`, payload: null})).toEqual(initialState);
});

it(`Reducer should change genre to a given value`, () => {
  expect(reducer(initialState, {
    type: `SET_GENRE`,
    payload: `genre`,
  })).toEqual({...initialState, activeGenre: `genre`});
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.setGenre(`genre`)).toEqual({
      type: `SET_GENRE`,
      payload: `genre`,
    } as Action);
  });
});
