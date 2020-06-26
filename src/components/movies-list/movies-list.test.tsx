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
    },
    {
      id: `456`,
      title: `Another Film`,
      poster: `another-poster.jpg`,
      genre: `drama`,
      year: 2000,
    },
  ];

  const tree = renderer
    .create(<MoviesList
      movies={movies}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
