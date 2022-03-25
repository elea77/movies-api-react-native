import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native';
import axios from 'axios'
import ButtonMovie from '../components/btnPoster'
import {TitleList, CommonTextRight, CommonText} from '../components/text'
import { Grid, Column } from '../components/layout'

const Home = ({ navigation }) => {

    const [now_playing, setMoviesNowPlaying] = useState([]);
    const [upcoming, setMoviesUpComing] = useState([]);
    const [popular, setMoviesPopular] = useState([]);
    const [isLoading, setLoading] = useState(true);

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
            setLoading(false);
        })
        .catch(function (error) {
            console.log(error);
            setLoading(false);
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
            setLoading(false);
        })
        .catch(function (error) {
            console.log(error);
            setLoading(false);
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
            setLoading(false);
        })
        .catch(function (error) {
            console.log(error);
            setLoading(false);
        })
    }, [])

    if(isLoading) {
        return(<CommonText>Chargement en cours</CommonText>)
    }

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
            {
                now_playing.length ?
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    data={now_playing}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ButtonMovie movie={item} navigation={navigation} />
                    )}
                />
                : <CommonText>Aucun film disponible</CommonText>
            }

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
            {
                upcoming.length ?
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    data={upcoming}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ButtonMovie movie={item} navigation={navigation} />
                    )}
                />
                : <CommonText>Aucun film disponible</CommonText>
            }

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
            {
                popular.length ?
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    data={popular}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => (
                        <ButtonMovie movie={item} navigation={navigation} />
                    )}
                />

                : <CommonText>Aucun film disponible</CommonText>
            }
        </Container>
    )
}

const Container = styled.ScrollView`
    color: white;
    margin: 10px
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

const Button = styled.TouchableOpacity``

Home.propTypes = {}

export default Home