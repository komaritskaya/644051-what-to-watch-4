import React from 'react';
import Main from '../main/main';
import {Movie} from '../../types';

interface AppProps {
  movies: Movie[];
  currentMovie: Movie;
}

const titleClickHandler = (): void => {};

const App: React.FC<AppProps> = ({movies, currentMovie}: AppProps) => {
  return (
    <Main
      movies={movies}
      currentMovie={currentMovie}
      onTitleClick={titleClickHandler}
    />
  );
};

export default App;
