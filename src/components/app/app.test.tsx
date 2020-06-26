import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`Render App`, () => {
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
    .create(<App
      currentMovie={movies[0]}
      movies={movies}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
