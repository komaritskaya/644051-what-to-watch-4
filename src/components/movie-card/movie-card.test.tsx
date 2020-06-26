import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`Should Movie Card component render correctly`, () => {
  const movie = {
    id: `123`,
    title: `Some Film`,
    poster: `some-poster.jpg`,
    genre: `comedy`,
    year: 2000,
  };

  const tree = renderer
    .create(<MovieCard
      movie={movie}
      onTitleClick={() => {}}
      onCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
