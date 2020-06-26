import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be pressed`, () => {
  const onTitleClick = jest.fn();
  const movies = [
    {
      id: `123`,
      title: `Some Film`,
      poster: `some-poster.jpg`,
      genre: `comedy`,
      year: 2000,
    },
    {
      id: `456`,
      title: `Another Film`,
      poster: `another-poster.jpg`,
      genre: `drama`,
      year: 2000,
    },
  ];

  const main = mount(
      <Main
        movies={movies}
        currentMovie={movies[0]}
        onTitleClick={onTitleClick}
      />
  );

  const titleLink = main.find(`a.small-movie-card__link`).first();

  titleLink.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});
