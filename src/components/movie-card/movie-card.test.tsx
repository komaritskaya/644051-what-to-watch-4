import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Should Movie Card component render correctly`, () => {
  const movie = movies[0];

  const tree = renderer
    .create(
        <Router>
          <MovieCard
            movie={movie}
            onCardHover={() => {}}
            onCardLeave={() => {}}
            isActive={false}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
