import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create(<Main
      currentMovie={{
        title: `The Grand Budapest Hotel`,
        genre: `Drama`,
        year: 2014
      }}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onTitleClick={(): void => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
