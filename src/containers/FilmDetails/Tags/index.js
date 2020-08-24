import React from 'react';

import Tag from '~/components/Tag';
import TitleFilmDetails from '~/components/TitleFilmDetails';

import { TagsContainer } from './styles';

export default function Tags({ genres }) {
  return (
    <>
      <TitleFilmDetails>Tags</TitleFilmDetails>
      <TagsContainer>
        {genres && genres.map((genre) => (
          <Tag key={genre.id}>{genre.name}</Tag>
        ))}
      </TagsContainer>
    </>
  );
}
