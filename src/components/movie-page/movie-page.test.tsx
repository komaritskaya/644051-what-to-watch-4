import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page';
import {movies} from '../../mocks/test-data';

it(`Render Movie Page`, () => {
  const movie = movies[0];

  const tree = renderer
    .create(<MoviePage
      movie={movie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
