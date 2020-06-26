import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';
import {movies} from '../../mocks/films';

it(`Should Movies List component render correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      movies={movies}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
