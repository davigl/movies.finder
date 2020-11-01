import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';

import { Wrapper, Content } from './styles';

export default function ShareButton() {
  return (
    <Wrapper>
      <span>Share</span>
      <Content>
        <AiFillFacebook />
        <AiFillFacebook />
        <AiFillFacebook />
      </Content>
    </Wrapper>
  );
}
