import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import {movies} from '../../mocks/test-data';

const mockStore = configureStore([]);

jest.mock(`../video-player/video-player`);
it(`Render App`, () => {
  const store = mockStore({
    movies,
    activeGenre: movies[0].genre,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            currentMovie={movies[0]}
            movies={movies}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
