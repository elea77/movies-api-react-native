import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import Poster from '../components/poster'
import Video from '../components/video'
// import VideoPlayer from 'react-native-video-player'

const Details = ({ route }) => {
    const [movie, setMovie] = useState({})
    const [video, setVideo] = useState({})

    const {
        params: { id }
    } = route

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
            <Poster
                urlImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Text>{movie.title}</Text>
            <Text>{movie.overview}</Text>
            {/* <Video
                urlVideo={`https://www.youtube.com/embed/${video.key}`} /> */}
            {/* <Video source={{uri: `https://www.youtube.com/embed/${video.key}`}} style={{width: 250, height: 200}} controls={true} /> */}
            <Video
                urlVideo={`https://www.youtube.com/embed/${video.key}`}
            />
        </Container>
    )
}

const Container = styled.ScrollView``

export default Details