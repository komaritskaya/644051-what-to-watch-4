import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMoreButton from './show-more-btn';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should show more button be clicked`, () => {
  const onButtonClick = jest.fn((...args) => [...args]);

  const showMoreButton = shallow(
      <ShowMoreButton
        onClick={onButtonClick}
      />
  );

  const button = showMoreButton.find(`.catalog__button`);
  button.simulate(`click`);

  expect(onButtonClick.mock.calls.length).toBe(1);
});
