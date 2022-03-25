import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { FlatList } from 'react-native';
import axios from 'axios'
import ButtonMovie from '../components/btnSmallPoster'

const Search = ({navigation}) => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([])

    const handleSearch = () => {
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/search/movie",
            params: {
                api_key: '6590c29cf14027ffe0cf70d4c826f104',
                language: "fr-FR",
                region: "fr",
                query: search
            }
        })
        .then(response => {
            setResults(response.data.results);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

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
                renderItem={({ item }) => (
                    <ButtonMovie movie={item} navigation={navigation} />
                )}
            />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    color: white;
    margin: 10px
    marginBottom: 50px
`

const Input = styled.TextInput`
    backgroundColor: #222222
    padding: 10px 14px
    borderRadius: 20px
    fontSize: 18px
    marginBottom: 10px
    color: white
`

export default Search;