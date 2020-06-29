import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page';

it(`Render Movie Page`, () => {
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
  };

  const tree = renderer
    .create(<MoviePage
      movie={movie}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
