import moment from 'moment';
import {Path} from '../../const';
import {Movie, DataAction, DataState} from '../../types';

const initialState: DataState = {
  movies: [],
};

const ActionCreator = {
  loadMovies: (movies: Movie[]): DataAction => {
    return {
      type: `LOAD_MOVIES`,
      payload: movies,
    };
  },
};

export const moviesAdapter = (movies) => {
  return movies.map((movie) => {
    return {
      id: movie[`id`],
      title: movie[`name`],
      poster: movie[`poster_image`],
      previewImage: movie[`preview_image`],
      cover: movie[`background_image`],
      background: movie[`background_color`],
      genre: movie[`genre`],
      director: movie[`director`],
      cast: movie[`starring`],
      year: movie[`released`],
      description: movie[`description`],
      duration: moment.duration(movie[`run_time`], `minutes`),
      trailer: movie[`preview_video_link`],
      video: movie[`video_link`],
      isFavorite: movie[`is_favorite`],
      rating: movie[`rating`],
      scoresCount: movie[`scores_count`],
    };
  });
};

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/${Path.FILMS}`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(moviesAdapter(response.data)));
      });
  },
};

const reducer = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case `LOAD_MOVIES`:
      return {...state, movies: action.payload};
  }

  return state;
};

export {reducer, Operation, ActionCreator};

