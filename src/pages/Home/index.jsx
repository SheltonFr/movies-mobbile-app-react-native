import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";

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
import { getListMovies, randomBanner } from "../../utils/movie";

export default Home = () => {

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [bannerMovie, setBannerMovie] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true; // Home page is active	?
        const ac = new AbortController();


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


            if (isActive) {
                setNowMovies(getListMovies(10, nowData.data.results));
                setPopularMovies(getListMovies(5, popularData.data.results));
                setTopMovies(getListMovies(5, topData.data.results));

                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])
                setLoading(false);
            }
        }

        getMovies();

        // funcao chamada quando o componente é desmontado[opcional]
        return () => {
            isActive = false; // Home passa a nao estar activa
            ac.abort(); // aborta todas as operacoes que estavam a correr no componente(requisicoes, etc...)
        }
    }, [])


    function navigateToDetailsPage(item) {
        console.log(item.id)
    }


    if (loading) {
        return (
            <Container>
                <ActivityIndicator size={"large"} color='#fff' />
            </Container>
        )
    }

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
                <BannerButton activeOpacity={.8} onPress={() => navigateToDetailsPage(bannerMovie.id)}>
                    <Banner
                        resizeMethod="resize"
                        source={{  uri: `https://image.tmdb.org/t/p/original${bannerMovie.poster_path}` }}
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