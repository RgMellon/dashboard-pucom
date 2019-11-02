import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaTachometerAlt, FaStore, FaList, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { history } from '../../services/history';

import { Container, Wrapper, Header, Separator, Aside, Menu } from './styles';

export default function NavMenu({ navigation }) {
  const { profile } = useSelector(state => state.user);
  return (
    <Container>
      <Wrapper>
        <Header>
          <img src={profile.image} alt="" />
          <p> {profile.fantasy_name} </p>
        </Header>
        <Separator />

        <Aside>
          <Menu>
            <Link to="/dashboard">
              <li>
                <FaTachometerAlt color="#fff" size="20" />
                <p> Dashboard </p>
              </li>
            </Link>

            <Link to="/store">
              <li>
                <FaStore color="#fff" size="20" />
                <p> Minha loja </p>
              </li>
            </Link>

            <Link to="/criar/cupom">
              <li>
                <FaPlus color="#fff" size="20" />
                <p> Criar Cupom </p>
              </li>
            </Link>

            <Link to="/listar/cupons">
              <li>
                <FaList color="#fff" size="20" />
                <p> Listar Cupons </p>
              </li>
            </Link>

            <Link to="/listar/cupons/vistos">
              <li>
                <FaList color="#fff" size="20" />
                <p> Listar Cupons Vistos </p>
              </li>
            </Link>
          </Menu>
        </Aside>
      </Wrapper>
    </Container>
  );
}
