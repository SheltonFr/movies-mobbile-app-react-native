import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/Header";
import { Feather } from '@expo/vector-icons'

import { Container, SearchContainer, Input, SearchButton } from "./style";

export default Home = () => {
    return (
        <Container>
            <Header title={"Prime Movies"} />

            <SearchContainer>
                <Input
                    placeholder='Ex...Vingadores'
                    placeholderTextColor='#ddd'
                />

                <SearchButton>
                    <Feather name="search" size={30} color='#fff'/>
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}