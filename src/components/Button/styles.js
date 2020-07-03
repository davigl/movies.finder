import styled from 'styled-components';

import { colors } from '~/assets/styles/partials/_variables';

export const Button = styled.a`
  max-width: 100px;

  padding: 15px 20px 15px 20px;
  border-radius: 20px;
  margin-left: 5px;
  font-size: 12px;
  cursor: pointer;

  background-color: ${(props) => props.background};
  color: ${colors.white};

  text-align: center;

  align-self: flex-end;

  svg {
    font-size: 9px;
    margin-left: 5px;
  }
`;
