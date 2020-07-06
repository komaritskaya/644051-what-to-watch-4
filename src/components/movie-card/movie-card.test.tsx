import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Should Movie Card component render correctly`, () => {
  const movie = movies[0];

  const tree = renderer
    .create(<MovieCard
      movie={movie}
      onCardClick={() => {}}
      onCardHover={() => {}}
      onCardLeave={() => {}}
      isActive={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
