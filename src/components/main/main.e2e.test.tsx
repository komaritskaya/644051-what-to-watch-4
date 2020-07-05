import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {movies} from '../../mocks/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should img or title link be pressed`, () => {
  const onCardClick = jest.fn();

  const main = mount(
      <Main
        movies={movies}
        currentMovie={movies[0]}
        onCardClick={onCardClick}
      />
  );

  const titleLink = main.find(`a.small-movie-card__link`).first();
  const imageLink = main.find(`div.small-movie-card__image`).first();

  titleLink.simulate(`click`);
  imageLink.simulate(`click`);

  expect(onCardClick.mock.calls.length).toBe(2);
});
