import React from 'react';

import * as Styled from './styles';

export default function Spinner({ loading }) {
  return (
    <>
      {loading
    && (
      <Styled.SpinnerWrapper>
        <Styled.Spinner />
      </Styled.SpinnerWrapper>
    )}
    </>
  );
}
