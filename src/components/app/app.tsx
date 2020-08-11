import React, {Dispatch} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app';
import {getMovies} from '../../reducer/data/selectors';
import {getGenre, getShownMoviesCount} from '../../reducer/app/selectors';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {Movie, AppAction} from '../../types';
import {getSingleRandomItemFromArray} from '../../utils';

interface AppProps {
  movies: Movie[];
  activeGenre: string;
  setGenre: (genre: string | null) => void;
  addShownMovies: (count: number) => void;
  resetShownMovies: () => void;
  shownMoviesCount: number;
}

const App: React.FC<AppProps> = ({
  movies,
  setGenre,
  addShownMovies,
  activeGenre,
  shownMoviesCount,
}) => {
  const currentMovie = movies.length && movies[0];
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            movies={movies}
            currentMovie={currentMovie}
            activeGenre={activeGenre}
            setGenre={setGenre}
            addShownMovies={addShownMovies}
            shownMoviesCount={shownMoviesCount}
          />
        </Route>

        <Route path="/movie/:id">
          <MoviePage
            allMovies={movies}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  activeGenre: getGenre(state),
  shownMoviesCount: getShownMoviesCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
  setGenre(genre: string) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.resetShownMovies());
  },
  addShownMovies(count: number) {
    dispatch(ActionCreator.addShownMovies(count));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

