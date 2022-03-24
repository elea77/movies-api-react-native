import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native';
import axios from 'axios'
import Poster from '../components/poster'
import {TitleList, CommonTextRight} from '../components/text'
import { Grid, Column } from '../components/layout'

const Home = ({ navigation }) => {

    const [now_playing, setMoviesNowPlaying] = useState([]);
    const [upcoming, setMoviesUpComing] = useState([]);
    const [popular, setMoviesPopular] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/now_playing",
            params: {
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr"
            }
        })
        .then(response => {
            setMoviesNowPlaying([...now_playing, ...response.data.results]);
        })
        .catch(function (error) {
            console.log(error);
        })
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/upcoming",
            params: {
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr"
            }
        })
        .then(response => {
            setMoviesUpComing([...upcoming, ...response.data.results]);
        })
        .catch(function (error) {
            console.log(error);
        })
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/popular",
            params: {
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr"
            }
        })
        .then(response => {
            setMoviesPopular([...popular, ...response.data.results]);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    return (
        <Container>
            <Grid>
                <Column style={{ width: "70%" }}>
                    <TitleList>Films à l'affiche</TitleList>
                </Column>
                <Column style={{ width: "30%" }}>
                    <Button onPress={() => navigation.navigate('Liste des films', { data: "now_playing" })} >
                        <CommonTextRight>Voir plus</CommonTextRight>
                    </Button>
                </Column>
            </Grid>
            <FlatList
                horizontal
                pagingEnabled={true}
                data={now_playing}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Button
                    onPress={() => navigation.navigate('Film', { id: item.id })} >
                        <Poster
                            urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                        <MovieTitle ellipsizeMode='tail' numberOfLines={1}>{item.title}</MovieTitle>
                    </Button>
                )}
            />

            <Grid>
                <Column style={{ width: "70%" }}>
                    <TitleList>Prochainement</TitleList>
                </Column>
                <Column style={{ width: "30%" }}>
                    <Button onPress={() => navigation.navigate('Liste des films', { data: "upcoming" })} >
                        <CommonTextRight>Voir plus</CommonTextRight>
                    </Button>
                </Column>
            </Grid>
            <FlatList
                horizontal
                pagingEnabled={true}
                data={upcoming}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Button
                    onPress={() => navigation.navigate('Film', { id: item.id })} >
                        <Poster
                            urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                        <MovieTitle ellipsizeMode='tail' numberOfLines={1}>{item.title}</MovieTitle>
                    </Button>
                )}
            />

            <Grid>
                <Column style={{ width: "70%" }}>
                    <TitleList>Les plus populaires</TitleList>
                </Column>
                <Column style={{ width: "30%" }}>
                    <Button onPress={() => navigation.navigate('Liste des films', { data: "popular" })} >
                        <CommonTextRight>Voir plus</CommonTextRight>
                    </Button>
                </Column>
            </Grid>
            <FlatList
                horizontal
                pagingEnabled={true}
                data={popular}
                keyExtractor={item => item.title}
                renderItem={({ item }) => (
                    <Button
                    onPress={() => navigation.navigate('Film', { id: item.id })} >
                        <Poster
                            urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                        <MovieTitle ellipsizeMode='tail' numberOfLines={1}>{item.title}</MovieTitle>
                    </Button>
                )}
            />
        </Container>
    )
}

const Container = styled.ScrollView`
    color: white;
    margin: 10px
`


const ResultsSearch = styled.FlatList`
    
`

const MovieTitle = styled.Text`
    color: white
    textAlign: center
    marginTop: 5px
    marginBottom: 10px
    fontWeight: bold
    fontSize: 14px
    width: 160px
`

const Input = styled.TextInput`
    backgroundColor: #222222
    padding: 8px 12px
    borderRadius: 20px
    fontSize: 15px
    marginBottom: 10px
    color: white
`

const Button = styled.TouchableOpacity``

Home.propTypes = {}

export default Home