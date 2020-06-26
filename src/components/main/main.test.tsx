import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Should Main component render correctly`, () => {
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
    .create(<Main
      currentMovie={movies[0]}
      movies={movies}
      onTitleClick={(): void => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
