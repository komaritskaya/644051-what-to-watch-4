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
    previewImage: `some-preview-image.jpg`,
    background: `#000`,
    video: `some-video.mp4`,
    isFavorite: true,
    rating: 5.0,
    scoresCount: 50,
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
    previewImage: `another-preview-image.jpg`,
    background: `#fff`,
    video: `another-video.mp4`,
    isFavorite: false,
    rating: 10.0,
    scoresCount: 70,
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
