import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {currentMovie, movies} from '../../mocks/films';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = mount(
      <Main
        movies={movies}
        currentMovie={currentMovie}
        onTitleClick={onTitleClick}
      />
  );

  const titleLink = main.find(`a.small-movie-card__link`).first();

  titleLink.simulate(`click`);

  expect(onTitleClick.mock.calls.length).toBe(1);
});
