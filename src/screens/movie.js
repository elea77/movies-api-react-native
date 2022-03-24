import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from '../components/icon'
import Actor from '../components/actor'
import {TitleMovie, TitleList, Legend, CommonText, SmallLegend, SmallTitleMovie} from '../components/text'
import YoutubePlayer from '../components/youtube'
import Rating from '../components/rating'
import {Grid, Column, Container} from '../components/layout'
import Moment from 'moment'
import { FlatList } from 'react-native';
import readWishlist from '../utils/readWishlist'
import addToWishlist from '../utils/addToWishlist'
import removeFromWishlist from '../utils/removeFromWishlist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Movie = ({ navigation, route }) => {
    const [movie, setMovie] = useState({})
    const [video, setVideo] = useState({})
    const [casting, setCasting] = useState({})

    const {
        params: { id }
    } = route

    const convertMinsToTime = (mins) => {
        let hours = Math.floor(mins / 60);
        let minutes = mins % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}h${minutes}`;
    }

    const checkFavorite = async item => {
        const allFav = await readWishlist()

        
        const index = allFav.map(f => f.id).findIndex(itemId => itemId === item.id)
        if (index === -1) {
            addToWishlist(item)
        } else {
            removeFromWishlist(item)
        }
    }
    

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}`,
            params: {
                ts: 1,
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr"
            }
        })
        .then(response => {
            setMovie(response.data);
        })
        .catch(error => {
            console.log(error)
        })
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}/videos`,
            params: {
                ts: 1,
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr"
            }
        })
        .then(response => {
            setVideo(response.data.results[0]);
        })
        .catch(error => {
            console.log(error)
        })
        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${id}/credits`,
            params: {
                ts: 1,
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr"
            }
        })
        .then(response => {
            setCasting(response.data.cast);
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <Grid>
                <Column style={{ width: "30%" }}>
                    <Icon
                        urlImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </Column>
                <Column style={{ width: "70%" }}>
                    <TitleMovie>{movie.title}</TitleMovie>
                    <Info>
                        <CommonText>
                            <Legend>Sortie</Legend> {Moment(movie.release_date).format('d MMM Y')}
                            <Legend> | Durée</Legend> {convertMinsToTime(movie.runtime)}
                        </CommonText>
                    </Info>
                </Column>
            </Grid>
            <YoutubePlayer
                urlVideo={video.key} />

            <FlatList
                horizontal
                pagingEnabled={false}
                data={movie.genres}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Legend>{item.name} | </Legend>
                )}
            />
            <CommonText numberOfLines={5}>
                {movie.overview}
            </CommonText>
            <Button
                onPress={() => navigation.navigate('Details', { id: movie.id })} >
                    <Legend>
                        Plus d'informations
                    </Legend>
            </Button>

            <Button
                onPress={() => {
                    checkFavorite(movie)
                }} >
                <CommonText>ADD TO FAVORITE</CommonText>
            </Button>

            <Grid>
                <Column style={{ width: "60%" }}>
                    <Text>Presse</Text>
                    <Rating note={Math.trunc((movie.vote_average / 2) * 10) / 10} />
                </Column>
                <Column></Column>
            </Grid>
            
            <TitleList>Casting <Legend>• {casting.length}</Legend></TitleList>
            <FlatList
                horizontal
                pagingEnabled={false}
                data={casting}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Actor urlImage={`https://image.tmdb.org/t/p/w500${item.profile_path}`} />
                        <SmallTitleMovie ellipsizeMode='tail' numberOfLines={1}>{item.name}</SmallTitleMovie>
                        <SmallLegend ellipsizeMode='tail' numberOfLines={1}>{item.character}</SmallLegend>
                    </View>
                )}
            />
        </Container>
    )
}


const Button = styled.TouchableOpacity`
`

const Info = styled.View`
    display: flex;
`

const Text = styled.Text`
    color: white
    textAlign: center
    marginBottom: 10px
    fontWeight: bold
    fontSize: 16px
`

const View = styled.View`
    width: 120px
    margin: 14px
`


export default Movie