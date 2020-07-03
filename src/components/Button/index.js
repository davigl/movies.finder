import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from './styles';

export default function Button({
  path, title, background, refresh, icon
}) {
  return (
    <Styled.Button
      background={background}
      href={path}
      target="_blank"
      onClick={refresh}
      rel="noopener noreferrer"
    > {title} <FontAwesomeIcon icon={icon} />
    </Styled.Button>
  );
}
