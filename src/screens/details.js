import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Icon from '../components/icon'
import {TitleMovie, Legend, CommonText} from '../components/text'
import YoutubePlayer from '../components/youtube'
import Moment from 'moment'

const Details = ({ route }) => {
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
                <FirstColumn>
                    <Icon
                        urlImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </FirstColumn>
                <SecondColumn>
                    <TitleMovie>{movie.title}</TitleMovie>
                    <Info>
                        <CommonText>
                            <Legend>Sortie</Legend> {Moment(movie.release_date).format('d MMM Y')}
                            <Legend> | Durée</Legend> {convertMinsToTime(movie.runtime)}
                        </CommonText>
                    </Info>
                </SecondColumn>
            </Grid>
            <YoutubePlayer
                urlVideo={video.key} />
            <CommonText>{movie.overview}</CommonText>

        </Container>
    )
}

const Container = styled.ScrollView``

const Grid = styled.View`
    flex: 1
    flexDirection: row
    flexWrap: wrap
    alignItems: flex-start
    margin: 10px
`

const FirstColumn = styled.View`
    width: 30%
`

const SecondColumn = styled.View`
    width: 70%
`

const Info = styled.View`
    display: flex;
`


export default Details