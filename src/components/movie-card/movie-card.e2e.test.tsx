import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card be hovered`, () => {
  const onCardHover = jest.fn((...args) => [...args]);
  const movie = {
    id: `123`,
    title: `Some Film`,
    poster: `some-poster.jpg`,
    genre: `comedy`,
    year: 2000,
    director: `Some Director`,
    cast: [`Actor One`, `Actor Two`],
    cover: `some-bg-poster.jpg`,
    description: `Damn good film`,
    rating: 10.0,
    reviewsCount: 100,
    trailer: `some-trailer.mp4`,
  };

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
