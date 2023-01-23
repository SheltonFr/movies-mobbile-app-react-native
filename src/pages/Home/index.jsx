import React, { useEffect, useState } from "react";
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
import api, { key } from "../../services/api";
import { getListMovies } from "../../utils/movie";

export default Home = () => {

    const [latest, setLatest] = useState(null)
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        let isActive = true;


        async function getMovies() {
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing/', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),

                api.get('/movie/popular/', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),

                api.get('/movie/top_rated/', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),


            ])


            setNowMovies(getListMovies(10, nowData.data.results));
            setPopularMovies(getListMovies(5, popularData.data.results));
            setTopMovies(getListMovies(5, topData.data.results));
        }

        getMovies();
    }, [])

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
                    data={nowMovies}
                    renderItem={({ item }) => <SliderItem movie={item} />}
                    keyExtrator={(item) => String(item.id)}
                />

                <Title>Populares</Title>
                <MoviesSlider
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={popularMovies}
                    renderItem={({ item }) => <SliderItem movie={item} />}
                    keyExtrator={(item) => String(item.id)}
                />

                <Title>Mais Votados</Title>
                <MoviesSlider
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={topMovies}
                    renderItem={({ item }) => <SliderItem movie={item} />}
                    keyExtrator={(item) => String(item.id)}
                />
            </ScrollView>
        </Container>
    )
}