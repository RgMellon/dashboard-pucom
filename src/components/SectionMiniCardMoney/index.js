import React, { useEffect, useState } from 'react';

import MiniCard from '../MiniCard';

import api from '~/services/api';

const bkg = [
  'linear-gradient(60deg,#26c6da,#00acc1) !important;',
  'linear-gradient(60deg,#ef5350,#e53935)!important',
  'linear-gradient(60deg,#ffa726,#fb8c00)',
  '#4caf50',
];

export default function SectionMiniCardMoney() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getFinancyCards() {
      const response = await api.get('datas/coupons/days/financier');

      // console.tron.log(response.data);
      const dataResponse = response.data[0].map((item, index) => ({
        ...item,

        background: bkg[index],
      }));

      setData(dataResponse);
    }

    getFinancyCards();
  }, []);
  return (
    <>
      {data.map(card => (
        <MiniCard
          boxColor={card.background}
          infoBox={card.value}
          titleCard={card.title}
        />
      ))}
    </>
  );
}
