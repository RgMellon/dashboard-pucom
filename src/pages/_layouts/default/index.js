import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

import NavMenu from '../../../components/NavMenu';
// import { Container } from './styles';

export default function defaultLayout({ children }) {
  return (
    <>
      <NavMenu />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

defaultLayout.prototypes = {
  children: PropTypes.element.isRequired,
};
