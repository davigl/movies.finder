import { Link } from 'react-router-dom';

import { Circle } from 'rc-progress';
import styled, { css } from 'styled-components';

import { tiltInRight, tiltInLeft } from '~/assets/styles/partials/_animations';
import { colors } from '~/assets/styles/partials/_variables';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  min-height: 570px;
  max-width: 1000px;

  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (max-width: 950px) {
    max-width: 300px;
  }
`;

export const WrapperCard = styled.section`
  align-self: ${(props) => (props.align ? props.align : 'flex-start')};

  width: 300px;
  height: 450px;
  box-shadow: 4px -5px 10px 0px rgba(0,0,0,.3);
  border-radius: 30px;

  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;

  transition: filter 2s;
  animation: ${tiltInLeft} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 48px 67px;
  grid-gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  a {
    img {
      height: 25px;
      width: auto;
    }
  }

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
`;


export const Details = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 500px;

  padding-left: 30px;
  transition: transform 2s;

  h1 {
    font-family: 'Ubuntu';
    font-size: 2.2rem;
    font-weight: bold;
    color: ${colors.white};

    span {
      font-size: 2rem;
      font-weight: normal;
      color: ${colors.grayLight};
    }

    @media screen and (max-width: 950px) {
      text-align: center;
    }
  }

  h3 {
    margin-bottom: 15px;
    color: ${colors.white};
    font-weight: 600;
    font-size: 1.3em;
  }

  h4 {
    margin-top: 15px;
    color: ${colors.white};
  }

  p {
    line-height: 17px;
    font-size: 14px;

    color: ${colors.grayLighter};
  }

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (max-width: 950px) {
    min-width: 300px;
    padding-left: 0;
    padding-top: 15px;
    flex: 1;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
`;

export const OverviewWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: rgba(8, 8, 26, .9);
  min-height: 260px;
  border-radius: 8px;
  padding: 80px 25px 50px 25px;
  animation: ${tiltInRight} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  span {
    max-width: 100px;
    color: ${colors.white};
    font-size: 11px;

    svg {
      margin-left: 5px;
      font-size: 10px;
    }
  }
`;

export const OverviewDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const AverageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 57px;
  height: 57px;
  background-color: ${colors.cyanDark};

  span {
    font-size: 0.9rem;
    font-weight: bold;
    z-index: 2;
  }
`;

export const Average = styled(Circle)`
  position: absolute;

  width: 50px;
  height: 50px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 120px;

  padding: 15px;

  box-sizing: border-box;

  background-color: ${colors.purpleDark};
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 5px;

  span > svg > &:first-child {
    color: ${colors.yellow};
  }
`;

export const ButtonsWrapper = styled.div`
  align-self: flex-start;
  margin-top: 25px;

  @media screen and (max-width: 950px) {
    align-self: center;
  }
  padding-bottom: 15px;
`;

export const Refresh = styled.a`
  max-width: 100px;
  padding: 15px 20px 15px 20px;
  border-radius: 20px;
  cursor: pointer;

  text-align: center;
  font-size: 12px;
  color: ${colors.white};
  background-color: ${colors.purpleDark};

  svg {
    font-size: 9px;
    margin-left: 5px;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const BackLink = styled(Link)`
  top: -30px;

  position: relative;
  font-size: 1.5rem;
  color: ${colors.white};
`;

export const BackgroundTabs = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  background-color: ${colors.purpleDarker};
  width: 100%;
`;

export const TabsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 120px 120px 120px;

  @media screen and (max-width: 950px) {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }
`;

export const ButtonTab = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${(p) => (p.isActive
    ? css`
      background-color: ${colors.purpleLighter}
    `
    : css`
      background-color: ${colors.purpleDark};
    `
  )};

  height: 60px;
  width: 100%;

  border: none;
  outline: none;
  cursor: pointer;

  > span {
    ${(p) => (p.isActive
    ? css`
          color: ${colors.white};
          font-weight: bold;
        `
    : css`
          color: ${colors.white};
          font-weight: inherit;
        `
  )};
  }

  > svg {
    color: ${(p) => (p.isActive ? colors.green : colors.greenDarker)};
  }
`;
