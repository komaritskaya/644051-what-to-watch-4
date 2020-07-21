import {reducer, ActionCreator} from './reducer';
import {Action} from '../types';
import {movies} from '../mocks/test-data';

const initialState = {
  movies,
  filter: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(initialState, {type: `ERROR`, payload: null})).toEqual(initialState);
});

it(`Reducer should change filter to a given value`, () => {
  expect(reducer(initialState, {
    type: `SET_FILTER`,
    payload: `filter`,
  })).toEqual({...initialState, filter: `filter`});
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing filter returns correct action`, () => {
    expect(ActionCreator.setFilter(`filter`)).toEqual({
      type: `SET_FILTER`,
      payload: `filter`,
    } as Action);
  });
});
