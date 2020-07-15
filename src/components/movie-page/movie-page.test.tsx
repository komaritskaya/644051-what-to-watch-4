import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page';
import {movies} from '../../mocks/test-data';

it(`Render Movie Page`, () => {
  const tree = renderer
    .create(
        <Router>
          <MoviePage
            allMovies={movies}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
