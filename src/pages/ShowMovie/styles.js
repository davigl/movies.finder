import styled from 'styled-components';

import { fadeIn } from '~/assets/styles/partials/_animations';
import { colors } from '~/assets/styles/partials/_variables';

const Wrapper = styled.main`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background-color: ${colors.primary};
  background-image: linear-gradient(120deg, rgba(8, 8, 26, .6) 0%, rgba(23, 23, 64, .5) 60%), linear-gradient(120deg, rgba(8, 8, 26, .6) 0%, ${(props) => props.hex} 100%), url(${(props) => props.thumbnail});
  background-size: 95%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 5s;

  animation: ${fadeIn} 2s ease-in;

  @media screen and (max-width: 950px) {
    background-size: cover;
  }
`;

export { Wrapper };
