import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { tiltInBottom, textPopUpTop, fadeIn } from '~/assets/styles/partials/_animations';
import { colors } from '~/assets/styles/partials/_variables';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: hidden;

  padding: 15px;
  border-radius: 15px;

  text-align: left;

  color: ${colors.white};

  div:first-child {
    display: flex;
    flex-direction: column;
    width: 480px;

    h1 {
      font-family: "Ubuntu";
      color: ${colors.white};
      font-size: 54px;
      font-weight: bold;

      animation: ${textPopUpTop} .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) .3s both;
    }

    p  {
      color: ${colors.gray};
      font-size: 16px;
      font-weight: 300;
      line-height: 30px;
      margin-top: 24px;

     animation: ${textPopUpTop} .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) .8s both;
    }
  }

  @media screen and (max-width: 950px) {
    width: 85%;

    div:first-child {
      width: 100%;

      h1 {
        font-size: 30px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`;

export const Select = styled.select`
  height: 50px;
  width: 100%;

  margin-top: 23px;

  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background-color: ${colors.purpleLighter};
  border: none;
  border-bottom: 2px solid ${colors.purpleDarker};
  color: white;
  padding: 16px 24px;
  appearance: none;
  transition: color .3s ease, background-color .3s ease, border-bottom-color .3s ease;

  &:hover, &:focus {
    color: ${colors.purpleDarker};
    background-color: white;
    border-bottom-color: ${colors.grayLighter};
  }
`;

export const GridOptions = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  width: 100%;
  grid-gap: 15px;

  animation: ${fadeIn} .2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.3s both;

  h6 {
    margin-top: 23px;
  }
`;

export const AnimationWrapper = styled.div`
  margin-left: 35px;
  margin-top: 35px;
  width: auto;
  animation: ${tiltInBottom} .4s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
  overflow: hidden;
  display: inherit;

  @media (min-width:320px) {
    display: none;
  }

  @media (min-width:480px) {
    height: 330px;
  }

  @media (min-width:600px) {
    display: none;
  }

  @media (min-width:1025px) {
    display: none;
  }

  @media (min-width:1281px) {
    display: inherit;
    height: 400px;
  }
`;

export const SearchButton = styled(Link).attrs((p) => ({
  to: p.path
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 240px;
  height: 56px;
  border: 0;
  border-radius: 30px;
  margin-top: 26px;

  background-color: ${colors.purpleLighter};
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;

  animation: ${fadeIn} .3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.3s both;

  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.purpleDarker};
  }

  @media screen and (max-width: 950px) {
    align-self: center;
  }
`;
