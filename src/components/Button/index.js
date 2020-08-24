import React from 'react';

import * as Styled from './styles';

export default function Button({
  path, title, background, refresh, children
}) {
  return (
    <Styled.Button
      background={background}
      href={path}
      target="_blank"
      onClick={refresh}
      rel="noopener noreferrer"
    > {title}
      {children}
    </Styled.Button>
  );
}
