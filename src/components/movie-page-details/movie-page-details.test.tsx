import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageDetails from './movie-page-details';
import {movies} from '../../mocks/test-data';

it(`Render Movie Page Details`, () => {
  const tree = renderer
    .create(<MoviePageDetails
      movie={movies[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
