import React, { useState } from 'react';

import {
  MdChevronRight,
  MdPerson,
  MdNotifications,
  MdLocalOffer,
} from 'react-icons/md';

import {
  MenuLeft,
  WrapperMenu,
  Container,
  ModalLogout,
  MenuRight,
} from './styles';

export default function Menu() {
  const [hide, setHide] = useState(false);
  function handleMenu() {
    setHide(!hide);
  }
  return (
    <Container>
      <WrapperMenu>
        <MenuLeft>
          <input
            type="text"
            placeholder="Digite o codigo do cupom para dar baixo"
          />

          <button type="button">
            <p> Baixar </p> <MdChevronRight size="14" color="#fff" />
          </button>
        </MenuLeft>
        <MenuRight>
          <MdLocalOffer color="#666" size="20" />

          {hide && <ModalLogout />}

          <button type="button">
            <MdNotifications color="#666" size="20" />
          </button>

          <button type="button" onClick={handleMenu}>
            <MdPerson color="#666" size="20" />
          </button>
        </MenuRight>
      </WrapperMenu>
    </Container>
  );
}
