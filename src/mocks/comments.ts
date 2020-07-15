import nanoid from 'nanoid';
import {
  getRandomNumberWithDecimals,
  getRandomDate,
  getSingleRandomItemFromArray
} from '../utils';
import {Comment} from '../types';

const USERS = [
  `Tim Macoveev`,
  `John Doe`,
  `Elon Musk`,
  `Boris Yeltsin`,
  `Johnny Knoxville`,
  `Che Guevara`,
  `Che Burashka`,
];

const PARAGRAPHS = [
  `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director’s funniest and most exquisitely designed movies in years.`,
  `Anderson’s films are too precious for some, but for those of us willing to lose ourselves in them, they’re a delight. «The Grand Budapest Hotel» is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  `I didn’t find it amusing, and while I can appreciate the creativity, it’s an hour and 40 minutes I wish I could take back.`,
  `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
  `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
];

export const generateComment = (): Comment => ({
  id: nanoid(),
  user: getSingleRandomItemFromArray(USERS),
  date: getRandomDate(new Date(2019, 1, 1), new Date()),
  text: getSingleRandomItemFromArray(PARAGRAPHS),
  rate: getRandomNumberWithDecimals(0, 10, 1),
});

export const generateComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};
