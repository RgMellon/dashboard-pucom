import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import {
  MdChevronRight,
  MdPerson,
  MdLocalOffer,
  MdExitToApp,
} from 'react-icons/md';

import { FaSpinner } from 'react-icons/fa';

import api from '~/services/api';
import history from '~/services/history';

import {
  MenuLeft,
  WrapperMenu,
  Container,
  ModalLogout,
  MenuRight,
  SubmitButton,
  QrButton,
} from './styles';

import { logout } from '~/store/modules/auth/actions';
import { setQrCode } from '~/store/modules/qrCode/actions';
import Notification from '../NotificationMenu';

export default function Menu() {
  const dispatch = useDispatch();

  const [hide, setHide] = useState(false);
  const [hashCupom, setHashCupom] = useState('');
  const [loading, setLoading] = useState(false);

  function handleQrCode() {
    dispatch(setQrCode());
  }

  function handleMenu() {
    setHide(!hide);
  }

  function handleLogout() {
    dispatch(logout());
  }

  function handleRedirectCreateCupom() {
    history.push('/criar/cupom');
  }

  async function handleTakeCupom() {
    if (!hashCupom) {
      toast.warn('Preencha corretamento :@ ');
      return;
    }

    try {
      setLoading(true);

      await api.put(`coupons/${hashCupom}/use`);

      toast.success('Cupom baixado com sucesso :D');
      setLoading(false);
      setHashCupom('');
    } catch (e) {
      toast.error('Erro ao baixar cupom');
      setHashCupom('');
      setLoading(false);
    }
  }

  return (
    <Container>
      <WrapperMenu>
        <MenuLeft>
          <Form onSubmit={handleTakeCupom}>
            <Input
              value={hashCupom}
              name="hash"
              type="text"
              onChange={e => setHashCupom(e.target.value)}
              placeholder="Digite o codigo do cupom para dar baixa"
            />

            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner size={14} color="#FFF" />
              ) : (
                <p>
                  Baixar <MdChevronRight size="14" color="#fff" />
                </p>
              )}
            </SubmitButton>
          </Form>

          <QrButton onClick={handleQrCode} />
        </MenuLeft>
        <MenuRight>
          <button type="button" onClick={handleRedirectCreateCupom}>
            <MdLocalOffer color="#666" size="20" />
          </button>

          {hide && (
            <ModalLogout>
              <ul>
                <li>
                  <button type="button" onClick={handleLogout}>
                    <MdExitToApp size={18} color="#333" />
                    Sair
                  </button>
                </li>
              </ul>
            </ModalLogout>
          )}

          <Notification />

          <button type="button" onClick={handleMenu}>
            <MdPerson color="#666" size="20" />
          </button>
        </MenuRight>
      </WrapperMenu>
    </Container>
  );
}
