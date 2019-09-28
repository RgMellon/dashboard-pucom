import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import MiniCard from '../MiniCard';

const bkg = [
  'linear-gradient(60deg,#26c6da,#00acc1) !important;',
  'linear-gradient(60deg,#ef5350,#e53935)!important',
  'linear-gradient(60deg,#ffa726,#fb8c00)',
  '#4caf50',
];

export default function SectionMiniCardDetail() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      try {
        const response = await api.get('/datas/coupons/users/genders');

        const dataResponse = response.data.genders.map((item, index) => ({
          ...item,

          background: bkg[index],
        }));

        setCards(dataResponse);
      } catch (e) {
        console.tron.log(e);
      }
    }

    getCards();
  }, []);

  return (
    <>
      {cards.map(card => (
        <MiniCard
          boxColor={card.background}
          infoBox={card.total}
          titleCard={card.type}
          amountGenderMale={card.masculine}
          amountGenderFemale={card.feminine}
        />
      ))}
    </>
  );
}
