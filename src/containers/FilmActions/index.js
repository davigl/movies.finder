import React from 'react';
import { FaRedo, FaPlay } from 'react-icons/fa';

import Button from '~/components/Button';

import * as Styled from './styles';

export default function FilmActions({ trailer, refreshPage }) {
  return (
    <Styled.ButtonsWrapper>
      <Styled.Refresh onClick={refreshPage}> Find Another <FaRedo /> </Styled.Refresh>
      {trailer
          && <Button background="#c4302b" title="Watch Trailer" path={trailer}> <FaPlay /> </Button>}
    </Styled.ButtonsWrapper>
  );
}
