import styled from 'styled-components';

import { colors } from '~/assets/styles/partials/_variables';

const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100px;
  min-height: 30px;
  padding: 5px;
  border-radius: 20px;
  margin-top: 10px;
  margin-right: 10px;
  font-size: 12px;

  color: ${colors.white};
  background-color: ${colors.primary};
`;

export default Tag;
