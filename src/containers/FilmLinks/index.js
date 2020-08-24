import React from 'react';

import {
  LinksWrapper, LogoImdb, LogoParents, Link
} from './styles';

export default function FilmLinks({ imdbPath }) {
  return (
    <LinksWrapper>
      {imdbPath
        && (
          <>
            <Link
              href={imdbPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoImdb />
            </Link>
            <Link
              href={`${imdbPath}/parentalguide`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoParents />
            </Link>
          </>
        )}
    </LinksWrapper>
  );
}
