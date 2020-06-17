import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        currentMovie={{
          title: `The Grand Budapest Hotel`,
          genre: `Drama`,
          year: 2014
        }}
        onTitleClick={onTitleClick}
      />
  );

  const titleLinks = main.find(`a.small-movie-card__link`);

  titleLinks.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onTitleClick.mock.calls.length).toBe(20);
});
