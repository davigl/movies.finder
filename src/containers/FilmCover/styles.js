import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { tiltInLeft } from '~/assets/styles/partials/_animations';
import { colors } from '~/assets/styles/partials/_variables';

export const Wrapper = styled.section`
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

export const BackLink = styled(Link)`
  top: -30px;

  position: relative;
  font-size: 1.5rem;
  color: ${colors.white};
`;
