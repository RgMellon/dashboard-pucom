import React from 'react';
import MiniCard from '../MiniCard';

export default function SectionMiniCardDetail() {
  return (
    <>
      <MiniCard
        boxColor="linear-gradient(60deg,#26c6da,#00acc1) !important;"
        infoBox="240"
        titleCard="Cupons vistos"
        amountGenderMale="1"
        amountGenderFemale="29"
      />
      <MiniCard
        boxColor="linear-gradient(60deg,#ef5350,#e53935)!important"
        infoBox="30"
        titleCard="Cupons pegos"
        amountGenderMale="5"
        amountGenderFemale="22"
      />
      <MiniCard
        boxColor="linear-gradient(60deg,#ffa726,#fb8c00)"
        infoBox="20"
        titleCard="Cupons concluidos"
        amountGenderMale="10"
        amountGenderFemale="22"
      />
      <MiniCard
        boxColor="#4caf50 !important"
        infoBox="100"
        titleCard="Visitas na loja"
        amountGenderMale="20"
        amountGenderFemale="40"
      />
    </>
  );
}
