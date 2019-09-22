import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import {
  MdChevronRight,
  MdPerson,
  MdNotifications,
  MdLocalOffer,
} from 'react-icons/md';

import { FaSpinner } from 'react-icons/fa';

import api from '~/services/api';

import {
  MenuLeft,
  WrapperMenu,
  Container,
  ModalLogout,
  MenuRight,
  SubmitButton,
} from './styles';

export default function Menu() {
  const [hide, setHide] = useState(false);
  const [hashCupom, setHashCupom] = useState('');
  const [loading, setLoading] = useState(false);

  function handleMenu() {
    setHide(!hide);
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
      console.tron.log('mas o que é isso');
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
              placeholder="Digite o codigo do cupom para dar baixo"
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
        </MenuLeft>
        <MenuRight>
          <MdLocalOffer color="#666" size="20" />

          {hide && <ModalLogout />}

          <button type="button">
            <MdNotifications color="#666" size="20" />
          </button>

          <button type="button" onClick={handleMenu}>
            <MdPerson color="#666" size="20" />
          </button>
        </MenuRight>
      </WrapperMenu>
    </Container>
  );
}
