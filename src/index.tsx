import React from 'react';
import 'moment/locale/ru';
import ReactDOM from 'react-dom';
import {movies, currentMovie} from './mocks/films';
import App from './components/app/app';

ReactDOM.render(
    <App
      currentMovie={currentMovie}
      movies={movies}
    />, document.querySelector(`#root`));


//    /\_/\
//   / - - \
//  <_  X  _>   /\_/\
//  /       \  <_0_0_>
// (_)_U_U_(_)  (u_u)
