import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should img or title link be pressed`, () => {
  const onCardClick = jest.fn();
  const movies = [
    {
      id: `123`,
      title: `Some Film`,
      poster: `some-poster.jpg`,
      genre: `comedy`,
      year: 2000,
      director: `Some Director`,
      cast: [`Actor One`, `Actor Two`],
      cover: `some-bg-poster.jpg`,
      description: `Damn good film`,
      rating: 10.0,
      reviewsCount: 100,
    },
    {
      id: `456`,
      title: `Another Film`,
      poster: `another-poster.jpg`,
      genre: `drama`,
      year: 2000,
      director: `Another Director`,
      cast: [`Actor One`, `Actor Two`],
      cover: `another-bg-poster.jpg`,
      description: `Awful film`,
      rating: 2.0,
      reviewsCount: 50,
    },
  ];

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
