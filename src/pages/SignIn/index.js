import React from 'react';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.png';
import { sigInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email formato inválido')
    .required('Email obrigatório'),

  password: Yup.string().min(6, 'Senha miníma 6 characteres'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(sigInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="img-icon" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit"> Entrar </button>
      </Form>
    </>
  );
}
