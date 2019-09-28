import React, { useState, useEffect } from 'react';

import { HeaderTable, PucomTable } from './styles';

export default function Table({
  tableHeader,
  dataTable,
  bkHeader,
  titleHeader,
}) {
  const [dataHead, setDataHead] = useState([]);

  useEffect(() => {
    setDataHead(tableHeader);
  }, []);

  return (
    <>
      <HeaderTable bkHeader={bkHeader}>
        <h1> {titleHeader} </h1>
      </HeaderTable>
      <PucomTable>
        <thead>
          <tr>
            {dataHead.map(item => (
              <th> {item} </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataTable.map(i => (
            <tr>
              <td>
                <img src={i.image} alt="" />
              </td>
              <td> {i.date}</td>
              <td>{i.title}</td>
            </tr>
          ))}
        </tbody>
      </PucomTable>
    </>
  );
}
