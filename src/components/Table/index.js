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
        {/* <p> Aqui você encontra os cupons cadastrdos </p> */}
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
          {dataTable.map(itemTr => (
            <tr>
              {itemTr.map(itemTd => (
                <td> {itemTd}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </PucomTable>
    </>
  );
}
