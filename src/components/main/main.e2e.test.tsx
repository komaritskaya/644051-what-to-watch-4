import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {movies} from '../../mocks/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should img or title link be pressed`, () => {
  const main = mount(
      <Router>
        <Main
          movies={movies}
          currentMovie={movies[0]}
        />
      </Router>
  );

  const cards = main.find(`article.small-movie-card`);
  expect(cards.length).toBe(movies.length);
});
