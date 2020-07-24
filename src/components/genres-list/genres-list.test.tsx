import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list';
import {movies} from '../../mocks/test-data';

it(`Should render GenresList component correctly`, () => {
  const node = renderer.create(
      <GenresList
        movies={movies}
        activeGenre={movies[0].genre}
        setGenre={() => {}}
      />).toJSON();

  expect(node).toMatchSnapshot();
});
