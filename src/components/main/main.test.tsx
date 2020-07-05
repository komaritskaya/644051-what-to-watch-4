import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create(<Main
      currentMovie={movies[0]}
      movies={movies}
      onCardClick={(): void => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
