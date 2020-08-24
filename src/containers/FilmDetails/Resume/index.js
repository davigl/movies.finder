import React from 'react';

import Paragraph from '~/components/Paragraph';
import TitleFilmDetails from '~/components/TitleFilmDetails';

export default function Resume({ description }) {
  return (
    <>
      <TitleFilmDetails>Resume</TitleFilmDetails>
      <Paragraph>
        {description}
      </Paragraph>
    </>
  );
}
