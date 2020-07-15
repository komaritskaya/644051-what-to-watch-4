import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';
import {movies} from '../../mocks/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card be hovered`, () => {
  const onCardHover = jest.fn((...args) => [...args]);
  const movie = movies[0];

  const movieCard = mount(
      <Router>
        <MovieCard
          movie={movie}
          onCardHover={onCardHover}
          onCardLeave={()=> {}}
          isActive={false}
        />
      </Router>
  );

  movieCard.simulate(`mouseenter`);

  expect(onCardHover.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls[0][0]).toBe(movie.id);
});
