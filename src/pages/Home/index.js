import React from 'react';

import Logo from '~/assets/images/logo.svg';
import Header from '~/containers/Header';

import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Nav>
        { Logo && <img src={Logo} alt="Logo Movie Finder" /> }
      </Styled.Nav>
      <Header />
      <Styled.RightShape alt="A Circle at the Right Top" />
      <Styled.BottomShape alt="A Circle at the Right Bottom" />
    </Styled.Container>
  );
}
