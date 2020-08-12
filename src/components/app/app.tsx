import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/app/app';
import {getMovies} from '../../reducer/data/selectors';
import {getGenre, getShownMoviesCount} from '../../reducer/app/selectors';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {Movie} from '../../types';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Operation as UserOperation, AuthorizationStatus} from '../..//reducer/user/user';
import SignIn from "../sign-in/sign-in";

interface AppProps {
  movies: Movie[];
  activeGenre: string;
  setGenre: (genre: string | null) => void;
  addShownMovies: (count: number) => void;
  resetShownMovies: () => void;
  shownMoviesCount: number;
  authStatus: string;
  login: ({login, password}: {login: string; password: string}) => void;
}

const App: React.FC<AppProps> = ({
  movies,
  setGenre,
  addShownMovies,
  activeGenre,
  shownMoviesCount,
  authStatus,
  login,
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
            authStatus={authStatus}
          />
        </Route>

        <Route path="/movie/:id">
          <MoviePage
            allMovies={movies}
            authStatus={authStatus}
          />
        </Route>
        <Route exact path="/sign-in">
          {authStatus === AuthorizationStatus.NO_AUTH ? (
            <SignIn onSubmit={login} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  activeGenre: getGenre(state),
  shownMoviesCount: getShownMoviesCount(state),
  authStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setGenre(genre: string) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.resetShownMovies());
  },
  addShownMovies(count: number) {
    dispatch(ActionCreator.addShownMovies(count));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

