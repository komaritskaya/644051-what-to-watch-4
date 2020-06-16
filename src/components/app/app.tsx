import React from 'react';
import Main from '../main/main';
import {Movie} from '../../types';

interface AppProps {
  currentMovie: Movie;
}

const App: React.FC<AppProps> = ({currentMovie}: AppProps) => {
  return (
    <Main currentMovie={currentMovie} />
  );
};

export default App;
