import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { FaTimes } from 'react-icons/fa';
import { setQrCode } from '~/store/modules/qrCode/actions';

import { Container, Close, Header, Content, PucomQrCode } from './styles';

import api from '~/services/api';

export default function QrCodeContainer() {
  const dispatch = useDispatch();

  const [calledApi, setCalledApi] = useState(false);

  function handleQrCode() {
    dispatch(setQrCode());
  }

  async function handleScan(data) {
    if (data) {
      try {
        await api.put(`coupons/${data}/use`);
        toast.success('Cupom baixado com sucesso :D');
      } catch (err) {
        toast.error('Erro ao baixar cupom');
      }
    }
  }

  function handleError(err) {
    toast.error('Erro ao ler QrCode');
  }

  return (
    <Container>
      <Header>
        <Close onClick={handleQrCode}>
          <FaTimes color="#f5350d" size={30} />
        </Close>
      </Header>

      <Content>
        <h2> Ler o QrCode para dar baixa </h2>

        <PucomQrCode delay={800} onError={handleError} onScan={handleScan} />
      </Content>
    </Container>
  );
}
