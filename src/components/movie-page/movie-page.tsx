import React from 'react';
import {HashRouter as Router, Route, Switch, withRouter, RouteComponentProps} from 'react-router-dom';
import TabsList from '../tabs-list/tabs-list';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MoreLikeThis from '../more-like-this/more-like-this';
import {Movie} from '../../types';

interface MoviePageProps {
  allMovies: Movie[];
}

type PropType = RouteComponentProps<{id: string}> & MoviePageProps;

const Tab = {
  OVERVIEW: {
    name: `Overview`,
    link: `/`,
  },
  DETAILS: {
    name: `Details`,
    link: `/details`
  },
  REVIEWS: {
    name: `Reviews`,
    link: `/reviews`,
  }
};

const MoviePage: React.FC<PropType> = ({allMovies, match: {params: {id}}}) => {
  const movie = allMovies.find((m) => m.id === id) || allMovies[0];
  const {
    title,
    genre,
    year,
    poster,
    cover,
  } = movie;
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={`img/${cover}`} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${poster}`} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Router>
                <TabsList tabs={Object.values(Tab)} />

                <Switch>
                  <Route exact path={Tab.OVERVIEW.link} component={() => <MoviePageOverview movie={movie} />} />
                  <Route path={Tab.DETAILS.link} component={() => <MoviePageDetails movie={movie} />} />
                  <Route path={Tab.REVIEWS.link} component={() => <MoviePageReviews movie={movie} />} />
                </Switch>

              </Router>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <MoreLikeThis
          movie={movie}
          allMovies={allMovies}
        />

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default withRouter(MoviePage);
