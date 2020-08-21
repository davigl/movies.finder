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
  margin-bottom: 5px;
  border-radius: 20px;
  font-size: 12px;

  color: ${colors.white};
  background-color: ${colors.purpleDark};

  margin-left: 5px;
  margin-right: 5px;
`;

export default Tag;
