import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const CurrentMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(<App currentMovie={CurrentMovie} />, document.querySelector(`#root`));
