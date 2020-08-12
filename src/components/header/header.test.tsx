import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './header';

it(`Render Header`, () => {
  const tree = renderer
    .create(
        <Router>
          <Header
            authStatus={`401`}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
