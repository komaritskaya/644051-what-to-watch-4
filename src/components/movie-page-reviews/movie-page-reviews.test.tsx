import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageReviews from './movie-page-reviews';

const comments = [
  {
    id: `1`,
    user: `User`,
    date: new Date(),
    text: `Hey`,
    rate: 1.0,
  }
];

it(`Render Movie Page Reviews`, () => {
  const tree = renderer
    .create(<MoviePageReviews comments={comments} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
