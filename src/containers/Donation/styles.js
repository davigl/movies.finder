import styled, { css } from 'styled-components';

import Spinner from '~/assets/images/spinner.png';
import {
  fadeIn, pulse, textPopUpTop, textPopTopDown, fadeOut
} from '~/assets/styles/partials/_animations';
import { colors } from '~/assets/styles/partials/_variables';

export const Wrapper = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background: rgba(220, 220, 220, .8);

  ${(p) => (p.show ? css`
    z-index: 3;
    animation: ${fadeIn} .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.3s  both;
  ` : css`
    z-index: 0;
    animation: ${fadeOut} .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  `)}
`;

export const FloatButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  position: fixed;

  right: 7%;
  bottom: 10px;
  padding: 15px;
  border-radius: 50%;

  background-color: ${colors.grayLight};
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 12px 0px, rgba(255, 255, 255, 0.8) -6px -2px 12px 0px;
  animation: ${pulse} 1.2s linear infinite;

  z-index: 5;

  border: none;
  outline: none;
  cursor: pointer;
`;

export const DonationWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 15px;

  position: fixed;
  right: 7%;
  bottom: 80px;
  border-radius: 8px;
  z-index: 4;

  width: 230px;
  padding: 15px;

  background-color: ${colors.purpleLighter};
  box-sizing: border-box;

  ${(p) => (p.show
    ? css`
      animation: ${textPopUpTop} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) .3s both;
    `
    : css`
      animation: ${textPopTopDown} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) .3s both;
    `)
}

`;

export const DonationTitle = styled.h1`
  color: ${colors.white};
  font-weight: bold;
`;

export const Divisor = styled.hr`
  height: 1px;
  width: 100%;
  opacity: .3;

  margin-top: 10px;
  margin-bottom: 10px;

  background-color: ${colors.grayLighter};
  border: none;
`;

export const Group = styled.ul`
  display: flex;
  flex-basis: 50%;

  flex-direction: column;
`;

export const Donation = styled.li`
  display: flex;
  align-items: center;

  margin-top: 5px;

  color: ${colors.white};
`;

export const DonationValue = styled.p`
  font-size: 12px;
  margin-left: 5px;
`;

export const DonationButton = styled.a.attrs(() => ({
  type: 'button'
}))`
  width: 120px;

  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px 12px;

  border-radius: 15px;

  color: ${colors.primary};
  font-weight: bold;
  font-size: 12px;
  text-align: center;

  box-shadow: rgb(209, 219, 15) 3px 3px 6px 0px inset, rgba(209, 219, 15, 0.7) -3px -3px 6px 1px inset;
  background-color: ${colors.yellow};

  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: scale(1.05);
    filter: brightness(90%);
  }
`;

export const OptionsImage = styled.img.attrs(() => ({
  src: Spinner
}))`
  height: 30px;
  width: 30px;
`;
