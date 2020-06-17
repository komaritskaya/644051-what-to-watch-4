import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      currentMovie={{
        title: `The Grand Budapest Hotel`,
        genre: `Drama`,
        year: 2014
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
