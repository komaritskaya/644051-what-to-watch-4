import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from './main';
import {movies} from '../../mocks/test-data';

jest.mock(`../video-player/video-player`);
it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Main
            currentMovie={movies[0]}
            movies={movies}
            activeGenre={movies[0].genre}
            setGenre={() => {}}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
