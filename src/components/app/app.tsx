import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {Movie} from '../../types';

interface AppProps {
  movies: Movie[];
  currentMovie: Movie;
}
interface AppState {
  detailedMovieId: string;
}

class App extends PureComponent<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      detailedMovieId: null,
    };

    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick(id) {
    this.setState({
      detailedMovieId: id,
    });
  }

  _renderApp(movies, currentMovie, detailedMovieId) {
    if (detailedMovieId) {
      return <MoviePage movie={this.props.movies.find((movie) => movie.id === detailedMovieId)}/>;
    }

    return (
      <Main
        movies={movies}
        currentMovie={currentMovie}
        onCardClick={this._handleCardClick}
      />
    );
  }

  render() {
    const {movies, currentMovie} = this.props;
    const {detailedMovieId} = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp(movies, currentMovie, detailedMovieId)}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage movie={movies.find((movie) => movie.id === detailedMovieId) || movies[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
