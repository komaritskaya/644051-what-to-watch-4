import moment from 'moment';

export const movies = [
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
    trailer: `some-trailer.mp4`,
    duration: moment.duration(100, `minutes`),
    comments: [
      {
        id: `111`,
        user: `User`,
        date: new Date(),
        text: `good film`,
        rate: 9.0,
      },
      {
        id: `222`,
        user: `Another User`,
        date: new Date(),
        text: `bad film`,
        rate: 1.0,
      },
    ],
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
    duration: moment.duration(60, `minutes`),
    trailer: `another-trailer.mp4`,
    comments: [],
  },
];

export const tabs = [
  {
    name: `Overview`,
    link: `/`,
  },
  {
    name: `Details`,
    link: `/details`
  },
  {
    name: `Reviews`,
    link: `/reviews`,
  }
];
