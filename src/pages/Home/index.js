import React from 'react';

import Logo from '~/assets/images/logo.png';
import Header from '~/containers/Header';

import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Nav>
        { Logo && <img src={Logo} alt="Logo Movie Finder" /> }
      </Styled.Nav>
      <Header />
      <Styled.RightShape />
      <Styled.BottomShape />
    </Styled.Container>
  );
}
