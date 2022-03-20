import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlatList, Image } from 'react-native';
import axios from 'axios'
import Poster from '../components/poster'


const Home = ({ navigation }) => {

    const [now_playing, setMoviesNowPlaying] = useState([]);
    const [upcoming, setMoviesUpComing] = useState([]);

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
    }, [])

    return (
        <Container>
            <TextStyled>Films à l'affiche</TextStyled>
            <FlatList
                horizontal
                pagingEnabled={true}
                data={now_playing}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Button
                    onPress={() => navigation.navigate('Details', { id: item.id })} >
                        <Poster
                            urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                    </Button>
                )}
                />
            <TextStyled>Prochainement</TextStyled>
            <FlatList
                horizontal
                pagingEnabled={true}
                data={upcoming}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Button
                    onPress={() => navigation.navigate('Details', { id: item.id })} >
                        <Poster
                            urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                    </Button>
                )}
            />
        </Container>
    )
}

const Container = styled.ScrollView``

const TextStyled = styled.Text`
    font-size: 22px
    margin: 10px 5px
`
const Button = styled.TouchableOpacity``

Home.propTypes = {}

export default Home