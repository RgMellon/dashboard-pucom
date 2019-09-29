import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSucces } from './actions';

export function* updateProfile({ payload }) {
  try {
    const response = yield call(api.post, 'shops', payload.data);
    // console.tron.log(response.data);
    yield put(updateProfileSucces(response.data));
    toast.success('Perfial da loja atualizada com sucesso');
  } catch (error) {
    toast.error('Erro ao atualizar perfil');
  }
}

export default all([takeLatest('@user/UPDATE_USER_REQUEST', updateProfile)]);
