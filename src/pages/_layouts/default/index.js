import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Menu, Container, Content } from './styles';

import NavMenu from '../../../components/NavMenu';
// import { Container } from './styles';

export default function defaultLayout({ children }) {
  return (
    <>
      <Menu />
      <NavMenu />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
}

defaultLayout.prototypes = {
  children: PropTypes.element.isRequired,
};
