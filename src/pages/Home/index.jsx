import React from "react";
import { ScrollView } from "react-native";

import Header from "../../components/Header";
import { Feather } from '@expo/vector-icons'

import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Title,
    BannerButton,
    Banner,
    MoviesSlider
} from "./style";
import SliderItem from "../../components/SliderItem";

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
                    <Feather name="search" size={30} color='#fff' />
                </SearchButton>
            </SearchContainer>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Title>Em Cartaz</Title>
                <BannerButton activeOpacity={.8} onPress={() => alert('Banner Button')}>
                    <Banner
                        resizeMethod="resize"
                        source={{ uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpbG1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                    />
                </BannerButton>

                <MoviesSlider
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
                    renderItem={({ item }) => <SliderItem />}
                />

                <Title>Populares</Title>
                <MoviesSlider
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
                    renderItem={({ item }) => <SliderItem />}
                />

                <Title>Mais Votados</Title>
                <MoviesSlider
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
                    renderItem={({ item }) => <SliderItem />}
                />
            </ScrollView>
        </Container>
    )
}