import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import TabsList from './tabs-list';
import {tabs} from '../../mocks/test-data';

it(`Render Tabs List`, () => {
  const tree = renderer
    .create(
        <Router>
          <TabsList
            tabs={tabs}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
