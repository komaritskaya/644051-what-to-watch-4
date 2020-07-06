import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Render App`, () => {
  const tree = renderer
    .create(<App
      currentMovie={movies[0]}
      movies={movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
