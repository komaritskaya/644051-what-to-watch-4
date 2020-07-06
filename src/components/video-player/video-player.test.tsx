import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import {movies} from '../../mocks/test-data';

const movie = movies[0];

it(`VideoPlayer is rendered correctly`, () => {
  const tree = renderer.create(<VideoPlayer
    isPlaying={false}
    poster={movie.poster}
    src={movie.trailer}
  />, {
    createNodeMock: () => {
      return {
        addEventListener: () => {},
      };
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
