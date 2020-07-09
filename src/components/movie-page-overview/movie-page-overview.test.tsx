import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageOverview from './movie-page-overview';
import {movies} from '../../mocks/test-data';

it(`Render Movie Page Overview`, () => {
  const tree = renderer
    .create(<MoviePageOverview
      movie={movies[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
