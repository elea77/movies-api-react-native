import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Legend, CommonText, CommonTextRight} from '../components/text'
import { InfoLine, Grid, Column, Container, View} from '../components/layout'
import Moment from 'moment'

const Details = ({ route }) => {
    const [movie, setMovie] = useState({})
    
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
    }, [])

    return (
        <Container>
            <View>
                <InfoLine style={{ paddingBottom: 10 }}>
                    <CommonText>{movie.overview}</CommonText>
                </InfoLine>
                <InfoLine>
                    <Grid>
                        <Column>
                            <CommonText>Titre original</CommonText>
                        </Column>
                        <Column>
                            <CommonTextRight>{movie.original_title}</CommonTextRight>
                        </Column>
                    </Grid>
                </InfoLine>
                <Grid>
                    <Column>
                        <CommonText>Année de production</CommonText>
                    </Column>
                    <Column>
                        <CommonTextRight>{Moment(movie.release_date).format('Y')}</CommonTextRight>
                    </Column>
                </Grid>
            </View>
        </Container>
    )
}

export default Details