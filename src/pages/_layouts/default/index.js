import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container } from './styles';

import NavMenu from '../../../components/NavMenu';
import Menu from '~/components/Menu';
// import { Container } from './styles';

export default function defaultLayout({ children }) {
  // const [file, setFile] = useState('');

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
