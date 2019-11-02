import React, { useEffect, useState } from 'react';

import { Container, HeaderTable, TableCupons } from './styles';

import api from '~/services/api';

export default function ListWatchCupons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getLastViewsCupons() {
      const response = await api.get('/datas/coupons/last/views');
      setData(response.data.views);
      console.tron.log(response.data.views);
    }

    getLastViewsCupons();
  }, []);

  return (
    <Container>
      <HeaderTable>
        <h1> Cupons visualidos </h1>
        <p> Aqui é a lista de pessoas que estão interessadas nos cupons </p>
      </HeaderTable>

      <TableCupons>
        <thead>
          <tr>
            <th> Imagem</th>
            <th> Titulo </th>
            <th> Data Criação </th>
            <th> Usuario </th>
            <th> Telefone </th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt="" />
              </td>

              <td> {item.title} </td>

              <td>{item.date} </td>

              <td> {item.name} </td>

              <td>
                <a href={`https://wa.me/${item.phone}`} target="_blank">
                  {item.phone}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </TableCupons>
    </Container>
  );
}
