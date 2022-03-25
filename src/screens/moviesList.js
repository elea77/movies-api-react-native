import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native';
import axios from 'axios'
import ButtonMovie from '../components/btnSmallPoster'


const MoviesList = ({ navigation, route }) => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const {
        params: { data }
    } = route

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${data}`,
            params: {
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr",
                page: page
            }
        })
        .then(response => {
            setMovies([...movies, ...response.data.results]);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [page])

    return (
        <Container>
            <FlatList
                data={movies}
                keyExtractor={item => item.id}
                numColumns={3}
                onEndReached={() => setPage(page + 1)}
                renderItem={({ item }) => (
                    <ButtonMovie movie={item} navigation={navigation} />
                )}
            />

        </Container>
    )
}

const Container = styled.SafeAreaView`
    color: white;
    margin: 10px
    marginTop: 20px
`


MoviesList.propTypes = {}

export default MoviesList