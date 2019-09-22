import React, { useState, useRef, useEffect } from 'react';

import { Container, HeaderTable, TableCupons } from './styles';

// import api from '~/services/api';

export default function ListCupons() {
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
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> Teste</td>
            <td> Teste</td>
            <td> Teste </td>
            <td> teste</td>
          </tr>
          <tr>
            <td> Teste</td>
            <td> Teste</td>
            <td> Teste </td>
            <td> teste</td>
          </tr>
          <tr>
            <td> Teste</td>
            <td> Teste</td>
            <td> Teste </td>
            <td> teste</td>
          </tr>
          <tr>
            <td> Teste</td>
            <td> Teste</td>
            <td> Teste </td>
            <td> teste</td>
          </tr>
          <tr>
            <td> Teste</td>
            <td> Teste</td>
            <td> Teste </td>
            <td> teste</td>
          </tr>
        </tbody>
      </TableCupons>
    </Container>
  );
}
