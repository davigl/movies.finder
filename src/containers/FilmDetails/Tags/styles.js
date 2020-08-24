import styled from 'styled-components';

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media screen and (max-width: 950px) {
    justify-content: center;
  }
`;
