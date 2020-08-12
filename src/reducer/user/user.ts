import {UserState, UserAction} from '../../types';
import {Path} from '../../const';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionCreator = {
  requireAuthorization: (status): UserAction => {
    return {
      type: `REQUIRE_AUTHORIZATION`,
      payload: status,
    };
  },
};

const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case `REQUIRE_AUTHORIZATION`:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/${Path.LOGIN}`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/${Path.LOGIN}`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
};

export {
  ActionCreator,
  AuthorizationStatus,
  Operation,
  reducer,
};
