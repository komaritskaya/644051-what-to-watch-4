import React, {Dispatch} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {Movie, RootState, Action} from '../../types';

interface AppProps {
  movies: Movie[];
  currentMovie: Movie;
  activeGenre: string;
  setGenre: (genre: string | null) => void;
}

const App: React.FC<AppProps> = ({movies, currentMovie, activeGenre, setGenre}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            movies={movies}
            currentMovie={currentMovie}
            activeGenre={activeGenre}
            setGenre={setGenre}
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

const mapStateToProps = (state: RootState) => ({
  movies: state.movies,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setGenre(genre: string) {
    dispatch(ActionCreator.setGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

