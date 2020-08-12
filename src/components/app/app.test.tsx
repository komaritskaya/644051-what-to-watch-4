import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';
import {movies} from '../../mocks/test-data';
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../reducer/user/user';

const mockStore = configureStore([]);

jest.mock(`../video-player/video-player`);
it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      movies,
    },
    [NameSpace.APP]: {
      activeGenre: movies[0].genre,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            movies={movies}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
