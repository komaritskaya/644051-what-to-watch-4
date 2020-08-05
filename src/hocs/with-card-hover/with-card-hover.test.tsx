import React from 'react';
import renderer from 'react-test-renderer';

import withCardHover from './with-card-hover';

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

const MockComponentWrapped = withCardHover(MockComponent);

it(`withCardHover is rendered correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped
        isPlaying={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
