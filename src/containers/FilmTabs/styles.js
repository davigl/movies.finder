import styled, { css } from 'styled-components';

import { colors } from '~/assets/styles/partials/_variables';

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
