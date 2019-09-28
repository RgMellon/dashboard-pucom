import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Table from '~/components/Table';

export default function LastCuponsTaked() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getLastCuponsTaked() {
      try {
        const response = await api.get('/datas/coupons/last/takes');
        console.tron.log(response.data);
        setData(response.data.takes);
      } catch (e) {
        console.tron.log(e);
      }
    }
    getLastCuponsTaked();
  }, []);
  return (
    <section>
      <Table
        titleHeader="Ultimos cupons pegos"
        bkHeader="linear-gradient(60deg,#ffa726,#fb8c00)"
        tableHeader={['Img', 'Data', 'Nome']}
        dataTable={data}
      />
    </section>
  );
}
