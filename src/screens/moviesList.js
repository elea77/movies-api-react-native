import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native';
import axios from 'axios'
import SmallPoster from '../components/smallPoster'


const MoviesList = ({ navigation, route }) => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const {
        params: { data }
    } = route

    const convertMinsToTime = (mins) => {
        let hours = Math.floor(mins / 60);
        let minutes = mins % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}h${minutes}`;
    }

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
            console.log(response.data.results);
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
                    <Button
                        onPress={() => navigation.navigate('Film', { id: item.id })} >

                        <SmallPoster
                            urlImage={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                        <MovieTitle ellipsizeMode='tail' numberOfLines={1}>{item.title}</MovieTitle>

                    </Button>
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


const MovieTitle = styled.Text`
    color: white
    textAlign: center
    marginTop: 5px
    marginBottom: 10px
    fontWeight: bold
    fontSize: 14px
    width: 100px
`

const Button = styled.TouchableOpacity`
    width: auto
    margin: auto
`

MoviesList.propTypes = {}

export default MoviesList