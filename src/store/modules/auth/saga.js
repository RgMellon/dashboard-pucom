import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { sigInSucces, signFailure } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, 'users/login', {
      email,
      password,
    });

    const { user, shop } = response.data;

    // return;

    yield put(sigInSucces(user.token, shop));

    // return;
    api.defaults.headers.Authorization = `Bearer ${user.token}`;

    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());
    toast.error('Problema ao realizar login');
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (e) {
    toast.error('Falha ao cadastrar, tente novamente mais tarde');

    // yield put(signFail());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
