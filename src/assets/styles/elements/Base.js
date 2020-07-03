import { createGlobalStyle } from 'styled-components';

import NeurialGroteskMedium from '~/assets/fonts/NeurialGrotesk-Medium.otf';
import NeurialGroteskRegular from '~/assets/fonts/NeurialGrotesk-Regular.otf';
import backgroundImage from '~/assets/images/SVG/bg2.svg';
import { colors } from '~/assets/styles/partials/_variables';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NeurialGrotesk-Regular';
    src: url(${NeurialGroteskRegular});
  }

  @font-face {
    font-family: 'NeurialGrotesk-Medium';
    src: url(${NeurialGroteskMedium});
  }

  @font-face {
    font-family: 'Ubuntu';
    src: require('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
  }

  @font-face {
    font-family: 'Abril Fatface', cursive;
    src: url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #08081A;
  }
`;

export default GlobalStyle;
