import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';

it(`Should Movies List component render correctly`, () => {
  const movies = [
    {
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
    },
    {
      id: `456`,
      title: `Another Film`,
      poster: `another-poster.jpg`,
      genre: `drama`,
      year: 2000,
      director: `Another Director`,
      cast: [`Actor One`, `Actor Two`],
      cover: `another-bg-poster.jpg`,
      description: `Awful film`,
      rating: 2.0,
      reviewsCount: 50,
    },
  ];

  const tree = renderer
    .create(<MoviesList
      movies={movies}
      onCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
