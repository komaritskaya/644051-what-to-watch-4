import React from 'react';
import Main from '../main/main';
import {Movie} from '../../types';

interface AppProps {
  currentMovie: Movie;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const titleClickHandler = (): void => {};

const App: React.FC<AppProps> = ({currentMovie}: AppProps) => {
  return (
    <Main
      currentMovie={currentMovie}
      onTitleClick={titleClickHandler}
    />
  );
};

export default App;
