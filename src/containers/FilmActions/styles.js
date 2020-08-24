import styled from 'styled-components';

import { colors } from '~/assets/styles/partials/_variables';

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
