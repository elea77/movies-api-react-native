import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from '../components/icon'
import {TitleMovie, Legend, CommonText} from '../components/text'
import YoutubePlayer from '../components/youtube'
import Rating from '../components/rating'
import {Grid, Column, Container} from '../components/layout'
import Moment from 'moment'
// import ReadMore from '@fawazahmed/react-native-read-more';
import ReadMore from 'react-native-read-more-text';
import { FlatList } from 'react-native';
import Star from 'react-native-star-view';

const Movie = ({ navigation, route }) => {
    const [movie, setMovie] = useState({})
    const [video, setVideo] = useState({})

    const {
        params: { id }
    } = route

    const convertMinsToTime = (mins) => {
        let hours = Math.floor(mins / 60);
        let minutes = mins % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}h${minutes}`;
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
            <ReadMore
              numberOfLines={5}
              style={{ color: "white" }}>
              <CommonText>
                    {movie.overview}
              </CommonText>
            </ReadMore>
            <Button
                onPress={() => navigation.navigate('Details', { id: movie.id })} >
                    <Legend>
                        Plus d'informations
                    </Legend>
            </Button>

            <Grid>
                <Column style={{ width: "60%" }}>
                    <Text>Presse</Text>
                    <Rating note={Math.trunc((movie.vote_average / 2) * 10) / 10} />
                </Column>
                <Column></Column>
            </Grid>
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


export default Movie