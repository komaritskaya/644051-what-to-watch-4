import NameSpace from '../name-space';

export const getMovies = (state) => {
  return state[NameSpace.DATA].movies;
};
