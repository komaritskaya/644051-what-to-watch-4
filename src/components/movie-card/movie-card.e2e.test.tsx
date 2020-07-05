import React from 'react';
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
      <MovieCard
        movie={movie}
        onCardHover={onCardHover}
        onCardLeave={()=> {}}
        onCardClick={() => {}}
        isActive={false}
      />
  );

  movieCard.simulate(`mouseenter`);

  expect(onCardHover.mock.calls.length).toBe(1);
  expect(onCardHover.mock.calls[0][0]).toBe(movie.id);
});
