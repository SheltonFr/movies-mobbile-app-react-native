import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import { Container, ItemImage, Title, RateContainer, Rate } from './styles'

export default function SliderItem() {
  return (
    <Container activeOpacity={.7}>
      <ItemImage
        source={{ uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpbG1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
      />

      <Title numberOfLines={1}>Vingadores Guerra Civil</Title>
      <RateContainer>
        <Ionicons name='md-star' size={12} color='#e7a74e' />
        <Rate>9/10</Rate>
      </RateContainer>

    </Container>
  );
}