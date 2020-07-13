import React from 'react';
import renderer from 'react-test-renderer';
import MoreLikeThis from './more-like-this';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Render More-Like-This Component`, () => {
  const tree = renderer
    .create(<MoreLikeThis
      movie={movies[0]}
      allMovies={movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
