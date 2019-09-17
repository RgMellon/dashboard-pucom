import React from 'react';

import { MdAddAPhoto } from 'react-icons/md';
import { Container, WrapperIcon } from './styles';

export default function MiniCard({ Children }) {
  return (
    <Container>
      <Children />
    </Container>
  );
}
