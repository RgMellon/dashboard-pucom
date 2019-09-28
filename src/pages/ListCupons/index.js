import React, { useState, useRef, useEffect } from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

import { Container, HeaderTable, TableCupons, Actions } from './styles';

import api from '~/services/api';

export default function ListCupons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCupons() {
      try {
        const response = await api.get('/coupons/shop', {
          params: {
            limit: 200,
          },
        });
        setData(response.data.coupons);
      } catch (e) {
        console.tron.log(e);
      }
    }

    getCupons();
  }, []);

  function handleClickDelete(id) {
    confirmAlert({
      title: 'Confirmar exclusão',
      message: 'Deseja realmente excluir o cupom ?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(id),
        },
        {
          label: 'Não',
        },
      ],
    });
  }

  async function handleDelete(id) {
    try {
      const response = await api.delete(`coupons/${id}`);

      const item = await data.filter(item => item.id !== id);
      setData(item);

      toast.success('Cupom excluido com sucesso');
    } catch (e) {
      console.tron.log(e);
      toast.error('Falha ao excluir cupom');
    }
  }

  return (
    <Container>
      <HeaderTable>
        <h1> Lista de cupons </h1>
        <p> Aqui você encontra os cupons cadastrados </p>
      </HeaderTable>

      <TableCupons>
        <thead>
          <tr>
            <th> Data Criação </th>
            <th> Imagem </th>
            <th> Titulo </th>
            <th> Desconto </th>
            <th> Ações </th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr>
              <td>
                <img src={item.image} alt="" />
              </td>

              <td> {item.created_at} </td>

              <td> {item.title} </td>
              <td>
                {item.discount} / {item.type}
              </td>
              <td>
                <Actions>
                  <button type="button">
                    <MdEdit size={18} color="#954cbf" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleClickDelete(item.id);
                    }}
                  >
                    <MdDelete size={18} color="#ef5350" />
                  </button>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </TableCupons>
    </Container>
  );
}
