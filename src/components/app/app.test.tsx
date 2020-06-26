import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {movies, currentMovie} from '../../mocks/films';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      currentMovie={currentMovie}
      movies={movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
