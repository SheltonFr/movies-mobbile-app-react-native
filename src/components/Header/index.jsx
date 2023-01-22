import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

import { MenuButton, Container, Title } from './style'
import { useNavigation } from '@react-navigation/native'

export default function Header({title}) {

  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton onPress={() => { navigation.openDrawer() }}>
        <Feather name='menu' color={'#fff'} size={36} />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  )
}