import React from 'react';
import renderer from 'react-test-renderer';

import withActiveMovie from './with-active-movie';

interface MockComponentProps {
  children: React.ReactNode;
}

const MockComponent = (props: MockComponentProps) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const MockComponentWrapped = withActiveMovie(MockComponent);

it(`withActiveMovie is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        onCardHover={() => {}}
        onCardLeave={() => {}}
        activeMovieId={`123`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
