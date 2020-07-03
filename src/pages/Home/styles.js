import styled from 'styled-components';

import Bottom from '~/assets/images/SVG/bottom.svg';
import Shape from '~/assets/images/SVG/bregueco.svg';

export const Nav = styled.nav`
  min-width: 1120px;
  padding: 15px;

  position: fixed;
  text-align: center;
  top: 0;

  img {
    height: 50px;
    width: auto;
  }
`;

export const Container = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const CarouselWrapper = styled.div`
  width: 80%;
  padding: 15px;
  border-radius: 15px;

  @media screen and (max-width: 950px) {
    width: 85%;
  }
`;

export const RightShape = styled.img.attrs(() => ({
  src: Shape
}))`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  height: auto;

  @media (min-width:320px) {
    width: 250px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1000px) {
    width: auto;
  }
`;

export const BottomShape = styled.img.attrs(() => ({
  src: Bottom
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

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
  }
`;
