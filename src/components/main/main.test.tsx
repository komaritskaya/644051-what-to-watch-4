import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Main from './main';
import {movies} from '../../mocks/test-data';
import {MOVIES_COUNT} from '../../const';

jest.mock(`../video-player/video-player`);
it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create(
        <Router>
          <Main
            currentMovie={movies[0]}
            movies={movies}
            addShownMovies={() => {}}
            shownMoviesCount={MOVIES_COUNT}
            setGenre={() => {}}
            activeGenre={null}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
