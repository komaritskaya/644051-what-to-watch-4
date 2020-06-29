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
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`,
  `Horror`,
];

const DIRECTORS = [
  `Anthony Mann`,
  `Woody Allen`,
  `Pedro Almodovar`,
  `Martin Scorsese`,
  `David Lynch`,
  `Alfred Hitchcock`,
  `Takeshi Kitano`,
];

const ACTORS = [
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Jennifer Aniston`,
  `Courteney Cox`,
  `Lisa Kudrow`,
  `Matt LeBlanc`,
  `Matthew Perry`,
  `David Schwimmer`,
];

const COVER = `bg-the-grand-budapest-hotel.jpg`;

const DESCRIPTION = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.\nGustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.
`;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBool = () => {
  return Math.random() < 0.5;
};

const getSingleRandomItemFromArray = (arr) => {
  return arr[getRandomInt(0, arr.length - 1)];
};

const getMultipleRandomItemsFromArray = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (getRandomBool()) {
      newArr.push(arr[i]);
    }
  }
  if (newArr.length === 0) {
    newArr.push(getSingleRandomItemFromArray(arr));
  }
  return newArr;
};

const generateMovie = () => ({
  id: nanoid(),
  title: getSingleRandomItemFromArray(TITLES),
  poster: getSingleRandomItemFromArray(POSTERS),
  cover: COVER,
  genre: getSingleRandomItemFromArray(GENRES),
  director: getSingleRandomItemFromArray(DIRECTORS),
  cast: getMultipleRandomItemsFromArray(ACTORS),
  year: getRandomInt(1980, 2020),
  description: DESCRIPTION,
  rating: getRandomInt(0, 10).toFixed(1),
  reviewsCount: getRandomInt(0, 100),
});

const generateMovies = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateMovie);
};

export const movies = generateMovies(MOVIES_COUNT);

export const currentMovie = getSingleRandomItemFromArray(movies);
