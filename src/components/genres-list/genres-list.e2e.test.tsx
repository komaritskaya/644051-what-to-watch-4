import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenresList from './genres-list';
import {movies} from '../../mocks/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

const genreClickHandler = jest.fn();

const genresList = mount(<GenresList
  movies={movies}
  activeGenre={movies[0].genre}
  setGenre={genreClickHandler}
/>);

const genreLink = genresList.find(`.catalog__genres-link`).first();

it(`GenreList component - click on genre link is correct`, () => {
  genreLink.simulate(`click`, {preventDefault() {}});
  expect(genreClickHandler).toHaveBeenCalledTimes(1);
  expect(genreClickHandler).toBeCalledWith(null);
});
