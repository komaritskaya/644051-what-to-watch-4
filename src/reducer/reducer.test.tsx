import {reducer, ActionCreator} from './reducer';
import {Action} from '../types';
import {movies} from '../mocks/test-data';
import {MOVIES_COUNT} from '../const';

const initialState = {
  movies,
  activeGenre: null,
  shownMoviesCount: MOVIES_COUNT,
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

it(`Reducer should increase shown movies count by a given value`, () => {
  expect(reducer(initialState, {
    type: `ADD_SHOWN_MOVIES`,
    payload: 1,
  })).toEqual({...initialState, shownMoviesCount: initialState.shownMoviesCount + 1});
});

it(`Reducer should reset shown movies count`, () => {
  expect(reducer(initialState, {
    type: `RESET_SHOWN_MOVIES`,
  })).toEqual(initialState);
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.setGenre(`genre`)).toEqual({
      type: `SET_GENRE`,
      payload: `genre`,
    } as Action);
  });

  it(`Action creator for changing shown movies count returns correct action`, () => {
    expect(ActionCreator.addShownMovies(1)).toEqual({
      type: `ADD_SHOWN_MOVIES`,
      payload: 1,
    } as Action);
  });

  it(`Action creator for reseting shown movies returns correct action`, () => {
    expect(ActionCreator.resetShownMovies()).toEqual({
      type: `RESET_SHOWN_MOVIES`,
    } as Action);
  });
});
