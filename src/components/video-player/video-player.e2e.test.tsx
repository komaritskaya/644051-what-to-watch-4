import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';
import {movies} from '../../mocks/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

const movie = movies[0];

it(`Should Video Player be switched to active mode`, () => {
  const handlePlay = jest.fn();

  const player = mount(
      <VideoPlayer
        src={movie.trailer}
        poster={movie.poster}
        isPlaying={false}
      />
  );
  jest.spyOn(HTMLMediaElement.prototype, `play`).mockImplementation(handlePlay);

  player.setProps({
    isPlaying: true,
  });

  expect(handlePlay).toHaveBeenCalledTimes(1);
});

it(`Should Video Player be paused`, () => {
  const handlePause = jest.fn();

  const player = mount(
      <VideoPlayer
        src={movie.trailer}
        poster={movie.poster}
        isPlaying={true}
      />
  );
  jest.spyOn(HTMLMediaElement.prototype, `load`).mockImplementation(handlePause);

  player.setProps({
    isPlaying: false,
  });

  expect(handlePause).toHaveBeenCalledTimes(1);
});
