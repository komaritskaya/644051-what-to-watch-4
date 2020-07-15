import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Should Movies List component render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <MoviesList
            movies={movies}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
