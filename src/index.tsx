import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import 'moment/locale/ru';
// import {movies, currentMovie} from './mocks/films';
import reducer from './reducer/reducer';
import App from './components/app/app';
import {createAPI} from './api';
import {Operation as DataOperation} from './reducer/data/data';
import {ActionCreator, Operation as UserOperation} from './reducer/user/user';
import {Auth} from './const';

const onUnauthorized = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  store.dispatch(ActionCreator.requireAuthorization(Auth.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadMovies());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        // currentMovie={currentMovie}
        // movies={movies}
      />
    </Provider>, document.querySelector(`#root`));


//    /\_/\
//   / - - \
//  <_  X  _>   /\_/\
//  /       \  <_0_0_>
// (_)_U_U_(_)  (u_u)
