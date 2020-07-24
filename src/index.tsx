import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'moment/locale/ru';
import {movies, currentMovie} from './mocks/films';
import {reducer} from './reducer/reducer';
import App from './components/app/app';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        currentMovie={currentMovie}
        movies={movies}
      />
    </Provider>, document.querySelector(`#root`));


//    /\_/\
//   / - - \
//  <_  X  _>   /\_/\
//  /       \  <_0_0_>
// (_)_U_U_(_)  (u_u)
