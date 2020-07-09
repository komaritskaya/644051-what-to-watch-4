import React from 'react';
import renderer from 'react-test-renderer';
import TabsList from './tabs-list';
import {tabs} from '../../mocks/test-data';

it(`Render Tabs List`, () => {
  const tree = renderer
    .create(<TabsList
      tabs={tabs}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
