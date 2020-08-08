import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './controls';

it(`Should render Controls component correctly`, () => {
  const node = renderer.create(
      <Controls
        onExitButtonClick={() => {}}
        onPlayButtonClick={() => {}}
        onFullScreenButtonClick={() => {}}
        isPlaying={true}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(node).toMatchSnapshot();
});
