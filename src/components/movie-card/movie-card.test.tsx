import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import {movies} from '../../mocks/films';

it(`Should Movie Card component render correctly`, () => {
  const tree = renderer
    .create(<MovieCard
      movie={movies[0]}
      onTitleClick={() => {}}
      onCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
