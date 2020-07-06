import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Should Movies List component render correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      movies={movies}
      onCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
