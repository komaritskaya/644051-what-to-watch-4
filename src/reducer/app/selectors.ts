import NameSpace from '../name-space';

export const getGenre = (state) => {
  return state[NameSpace.APP].activeGenre;
};

export const getShownMoviesCount = (state) => {
  return state[NameSpace.APP].shownMoviesCount;
};
