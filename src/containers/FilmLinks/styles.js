import styled, { css } from 'styled-components';

import ImdbLogo from '~/assets/images/logo-imdb.png';
import ParentsGuideLogo from '~/assets/images/parents-guide-3.png';

const _icon = css`
  height: 25px;
  width: auto;
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 48px 67px;
  grid-gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
`;

export const LogoImdb = styled.img.attrs(() => ({
  src: ImdbLogo,
  alt: 'An imdb logo',
}))`
  ${_icon};
`;

export const LogoParents = styled.img.attrs(() => ({
  src: ParentsGuideLogo,
  alt: 'An imdb logo for parents guide',
}))`
  ${_icon};
`;

export const Link = styled.a``;
