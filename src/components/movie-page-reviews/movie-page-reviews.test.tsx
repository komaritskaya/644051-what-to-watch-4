import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageReviews from './movie-page-reviews';
import {movies} from '../../mocks/test-data';

it(`Render Movie Page Reviews`, () => {
  const tree = renderer
    .create(<MoviePageReviews
      movie={movies[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
