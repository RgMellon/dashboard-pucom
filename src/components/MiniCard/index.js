import React from 'react';

import {
  FaGenderless,
  FaMobile,
  FaTransgenderAlt,
  FaVenus,
  FaMars,
} from 'react-icons/fa';

import {
  ContainerMiniCard,
  WrapperIcon,
  ContentMiniCard,
  BoxContent,
  Box,
} from './styles';

export default function MiniCard({
  boxColor,
  infoBox,
  titleCard,
  amountGenderMale,
  amountGenderFemale,
}) {
  return (
    <ContainerMiniCard>
      <WrapperIcon background={boxColor}>
        {/* <FaGenderless size={40} color="#fff" /> */}
        <p> {infoBox} </p>
      </WrapperIcon>

      <ContentMiniCard>
        <h3> {titleCard} </h3>

        <Box>
          <BoxContent>
            {amountGenderMale && <FaVenus color="#e4a1bb" size={30} />}
            <p> {amountGenderFemale} </p>
          </BoxContent>

          <BoxContent>
            {amountGenderMale && <FaMars color="#0076b5" size={30} />}
            <p> {amountGenderMale} </p>
          </BoxContent>
        </Box>
      </ContentMiniCard>
    </ContainerMiniCard>
  );
}
