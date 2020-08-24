import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import { Wrapper, BackLink } from './styles';

export default function FilmCover({ thumbnail, align }) {
  return (
    <Wrapper align={align} background={thumbnail}>
      <BackLink to="/">
        <FaArrowLeft />
      </BackLink>
    </Wrapper>
  );
}
