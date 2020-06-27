import nanoid from 'nanoid';

const MOVIES_COUNT = 8;

const TITLES = [
  `Avatar`,
  `Aviator`,
  `The Grand Budapest Hotel`,
  `Bohemian Rhapsody`,
  `Dardjeeling Limited`,
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Johnny English`,
  `Macbeth`,
  `Midnight Special`,
  `Mindhunter`,
  `Moonrise Kingdom`,
  `No Country for Old Men`,
  `Orlando`,
  `Player Poster`,
  `Pulp Fiction`,
  `Revenant`,
  `Seven Years in Tibet`,
  `Shutter Island`,
  `Snatch`,
  `The Grand Budapest Hotel`,
  `War of the Worlds`,
  `We Need to Talk About Kevin`,
  `What We Do in the Shadows`,
];

const POSTERS = [
  `avatar.jpg`,
  `aviator.jpg`,
  `bohemian-rhapsody.jpg`,
  `dardjeeling-limited.jpg`,
  `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `johnny-english.jpg`,
  `macbeth.jpg`,
  `midnight-special.jpg`,
  `mindhunter.jpg`,
  `moonrise-kingdom.jpg`,
  `no-country-for-old-men.jpg`,
  `orlando.jpg`,
  `player-poster.jpg`,
  `pulp-fiction.jpg`,
  `revenant.jpg`,
  `seven-years-in-tibet.jpg`,
  `shutter-island.jpg`,
  `snatch.jpg`,
  `the-grand-budapest-hotel-poster.jpg`,
  `war-of-the-worlds.jpg`,
  `we-need-to-talk-about-kevin.jpg`,
  `what-we-do-in-the-shadows.jpg`,
];

const GENRES = [
  `musical`,
  `western`,
  `drama`,
  `comedy`,
  `cartoon`,
  `mystery`,
  `horror`,
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomItemFromArray = (arr) => {
  return arr[getRandomInt(0, arr.length - 1)];
};

const generateMovie = () => ({
  id: nanoid(),
  title: getRandomItemFromArray(TITLES),
  poster: getRandomItemFromArray(POSTERS),
  genre: getRandomItemFromArray(GENRES),
  year: getRandomInt(1980, 2020),
});

const generateMovies = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateMovie);
};

export const movies = generateMovies(MOVIES_COUNT);

export const currentMovie = getRandomItemFromArray(movies);
