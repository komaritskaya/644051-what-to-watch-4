import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const movie = {
  id: `123`,
  title: `Some Film`,
  poster: `some-poster.jpg`,
  genre: `comedy`,
  year: 2000,
  director: `Some Director`,
  cast: [`Actor One`, `Actor Two`],
  cover: `some-bg-poster.jpg`,
  trailer: `some-trailer.mp4`,
  description: `Damn good film`,
  rating: 10.0,
  reviewsCount: 100,
};

it(`VideoPlayer is rendered correctly`, () => {
  let isPlaying = false;
  const tree = renderer.create(<VideoPlayer
    isPlaying={isPlaying}
    poster={movie.poster}
    src={movie.trailer}
  />, {
    createNodeMock: (element) => {
      if (element.type === `video`) {
        return {
          play: () => {
            isPlaying = true;
          }
        };
      }
      return null;
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
