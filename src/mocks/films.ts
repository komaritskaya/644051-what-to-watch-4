import nanoid from 'nanoid';
import moment from 'moment';
import {
  getRandomInt,
  getSingleRandomItemFromArray,
  getMultipleRandomItemsFromArray
} from '../utils';
import {generateComments} from './comments';
import {Movie} from '../types';

const MOVIES_COUNT = 50;

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

const TRAILER = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;

const generateDurationInMinutes = (min: number, max: number) => {
  const minutes = moment.duration(getRandomInt(min, max), `minutes`);
  return minutes;
};

const generateMovie = (): Movie => ({
  id: nanoid(),
  title: getSingleRandomItemFromArray(TITLES),
  poster: getSingleRandomItemFromArray(POSTERS),
  cover: COVER,
  genre: getSingleRandomItemFromArray(GENRES),
  director: getSingleRandomItemFromArray(DIRECTORS),
  cast: getMultipleRandomItemsFromArray(ACTORS),
  year: getRandomInt(1980, 2020),
  description: DESCRIPTION,
  duration: generateDurationInMinutes(60, 180),
  trailer: TRAILER,
  comments: generateComments(getRandomInt(5, 10)),
});

const generateMovies = (count: number): Movie[] => {
  return new Array(count)
    .fill(``)
    .map(generateMovie);
};

export const movies = generateMovies(MOVIES_COUNT);

export const currentMovie = getSingleRandomItemFromArray(movies);
