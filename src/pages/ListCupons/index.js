import React, { useState, useRef, useEffect } from 'react';

import { MdEdit, MdDelete } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';
import { Container, HeaderTable, TableCupons, Actions } from './styles';

// import api from '~/services/api';

export default function ListCupons() {
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

  function handleDelete() {
    alert('dasds');
  }
  // useEffect(() => {
  //   async function getCupons() {
  //     const response = await api.get('')
  //   }
  // }, []);
  return (
    <Container>
      <HeaderTable>
        <h1> Lista de cupons </h1>
        <p> Aqui você encontra os cupons cadastrdos </p>
      </HeaderTable>

      <TableCupons>
        <thead>
          <tr>
            <th> Data Criação </th>
            <th> Nome </th>
            <th> t2</th>
            <th> t3 </th>
            <th> Ações </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> Teste</td>
            <td> Teste</td>
            <td> Teste </td>
            <td> teste</td>
            <td>
              <Actions>
                <button type="button">
                  <MdEdit size={18} color="#954cbf" />
                </button>
                <button type="button" onClick={handleClickDelete}>
                  <MdDelete size={18} color="#ef5350" />
                </button>
              </Actions>
            </td>
          </tr>
          <tr>
            <td> Teste</td>
            <td> Teste</td>
            <td> Teste </td>
            <td> teste</td>
            <td>
              <Actions>
                <button type="button">
                  <MdEdit size={18} color="#954cbf" />
                </button>
                <button type="button">
                  <MdDelete size={18} color="#ef5350" />
                </button>
              </Actions>
            </td>
          </tr>
        </tbody>
      </TableCupons>
    </Container>
  );
}
