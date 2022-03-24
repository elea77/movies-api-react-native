import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { FlatList } from 'react-native';
import axios from 'axios'
import SmallPoster from '../components/smallPoster'

const Search = ({navigation}) => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([])
    const [page, setPage] = useState(1);

    const handleSearch = () => {
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/search/movie",
            params: {
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr",
                query: search,
                page: page
            }
        })
        .then(response => {
            setResults(response.data.results);
            console.log(results);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        console.log(results);
    }, [results, page])

    return (
        <Container>
            <Input
                placeholder="Rechercher un film"
                placeholderTextColor="white" 
                onChangeText={search =>{ setSearch(search), handleSearch()}}
            />

            <FlatList
                data={results}
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
    );
};

const Container = styled.SafeAreaView`
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
    width: 100px
`

const Button = styled.TouchableOpacity`
    width: auto
    margin: auto
`

const Input = styled.TextInput`
    backgroundColor: #222222
    padding: 8px 12px
    borderRadius: 20px
    fontSize: 15px
    marginBottom: 10px
    color: white
`

export default Search;