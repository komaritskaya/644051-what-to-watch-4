import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreBtn from './show-more-btn';

it(`Should ShowMoreBtn component render correctly`, () => {
  const node = renderer.create(
      <ShowMoreBtn onClick={() => {}} />
  ).toJSON();

  expect(node).toMatchSnapshot();
});
