import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {reducer, Operation, moviesAdapter} from './data';
import {movies} from '../../mocks/test-data';
import {Path, Status} from '../../const';
import {DataAction} from '../../types';

const api = createAPI();

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {} as DataAction)).toEqual({
    movies: [],
  });
});

it(`Reducer should update movies by load movies`, () => {
  expect(reducer({
    movies: [],
  }, {
    type: `LOAD_MOVIES`,
    payload: movies,
  })).toEqual({
    movies,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/${Path.FILMS}`)
      .reply(Status.OK, movies);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_MOVIES`,
          payload: moviesAdapter(movies),
        });
      });
  });
});
