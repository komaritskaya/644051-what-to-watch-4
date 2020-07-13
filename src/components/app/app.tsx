import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {Movie} from '../../types';

interface AppProps {
  movies: Movie[];
  currentMovie: Movie;
}

const App: React.FC<AppProps> = ({movies, currentMovie}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            movies={movies}
            currentMovie={currentMovie}
          />
        </Route>

        <Route exact path="/:id">
          <MoviePage
            allMovies={movies}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
