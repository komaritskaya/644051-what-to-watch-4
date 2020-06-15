import React from 'react';
import Main from '../main/main';

interface AppProps {
  currentMovie: {
    title: string;
    genre: string;
    year: number;
  };
}

const App: React.FC<AppProps> = ({currentMovie}: AppProps) => {
  return (
    <Main currentMovie={currentMovie} />
  );
};

export default App;
