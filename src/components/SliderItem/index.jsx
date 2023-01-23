import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import { Container, ItemImage, Title, RateContainer, Rate } from './styles'

export default function SliderItem({movie}) {
  return (
    <Container activeOpacity={.7}>
      <ItemImage
        source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`}}
      />

      <Title numberOfLines={1}>{movie.original_title}</Title>
      <RateContainer>
        <Ionicons name='md-star' size={12} color='#e7a74e' />
        <Rate>{movie.vote_average}/10</Rate>
      </RateContainer>

    </Container>
  );
}