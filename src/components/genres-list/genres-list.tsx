import React from 'react';
import {Movie} from '../../types';
import {MAX_GENRES_COUNT} from '../../const';

interface GenresListProps {
  activeGenre: string;
  movies: Movie[];
  setGenre: (genre: string | null) => void;
}

const ACTIVE_CLASS = `catalog__genres-item--active`;

const getGenresList = (moviesList) => {
  return [...new Set(moviesList.map((movie) => movie.genre))].slice(0, MAX_GENRES_COUNT);
};

const GenresList: React.FC<GenresListProps> = ({activeGenre, setGenre, movies}) => {
  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${!activeGenre ? ACTIVE_CLASS : ``}`}
        onClick={(evt) => {
          evt.preventDefault();
          setGenre(null);
        }}
      >
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {getGenresList(movies).map((genre, index) => (
        <li
          key={index}
          className={
            `catalog__genres-item
            ${genre === activeGenre ? ACTIVE_CLASS : ``}`
          }
          onClick={(evt) => {
            evt.preventDefault();
            setGenre(genre as string);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
