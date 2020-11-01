import styled from 'styled-components';

import Bottom from '~/assets/images/SVG/bottom.svg';
import Shape from '~/assets/images/SVG/bregueco.svg';
import { fadeIn } from '~/assets/styles/partials/_animations';

export const Nav = styled.nav`
  min-width: 1120px;
  padding: 15px;

  position: fixed;
  text-align: center;
  top: 0;

  img {
    height: 80px;
    width: auto;
  }
`;

export const Container = styled.main`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const RightShape = styled.img.attrs(() => ({
  src: Shape
}))`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  animation: ${fadeIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s  both;

  height: auto;

  @media (min-width:320px) {
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 1000px) {
    width: 550px;
  }
`;

export const BottomShape = styled.img.attrs(() => ({
  src: Bottom
}))`
  position: absolute;
  bottom: 0;
  left: -8px;
  z-index: -1;
  animation: ${fadeIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s  both;

  height: auto;

  @media (min-width:320px) {
    width: 150px;
    right: -8px;
    left: inherit;
    transform: rotate(270deg);
  }

  @media (min-width: 1000px) {
    left: 0;
    transform: rotate(0deg);
    width: 270px;
    bottom: 0px;
  }
`;
