import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {movies, currentMovie} from '../../mocks/films';

it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create(<Main
      currentMovie={currentMovie}
      movies={movies}
      onTitleClick={(): void => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
