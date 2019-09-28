import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import Table from '~/components/Table';

import { Container } from './styles';

export default function LastCuponsViews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getLastViewsCupons() {
      const response = await api.get('/datas/coupons/last/views');
      setData(response.data.views);
    }

    getLastViewsCupons();
  }, []);
  return (
    <section>
      <Table
        titleHeader="Ultimos cupons vistos"
        bkHeader="linear-gradient(60deg,#66bb6a,#43a047)"
        tableHeader={['img', 'Data', 'Nome']}
        dataTable={data}
      />
    </section>
  );
}
