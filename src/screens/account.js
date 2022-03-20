import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import { FlatList } from 'react-native';

const Account = ({ navigation }) => {

  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios({
      method: "GET",
      url: 'https://gateway.marvel.com/v1/public/characters',
      params: {
        limit: 20,
        offset,
        ts: 1,
        apikey: '8c2c7b6c1e6a5db2caaed962badaffe6',
        hash: '3e4a3c0c490d18f86c9dd59b92f566e0'
      }
    })
      .then(response => {
        setCharacters([...characters, ...response.data.data.results])
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [offset])


  return (
    <>
      <TextStyled>Account</TextStyled>
      <Button
        onPress={() => navigation.navigate('HomeStack', { screen: 'home' })} >
        <TextStyled>To Home</TextStyled>
      </Button>
      <FlatList
        horizontal
        pagingEnabled={true}
        data={characters}
        keyExtractor={item => item.id}
        onEndReached={() => setOffset(offset + 20)}
        renderItem={({ item }) => (
          <Button
            onPress={() => navigation.navigate('Details', { id: item.id })}
            >
            {/* <Avatar
              urlImage={`https:${item.thumbnail.path.split(':')[1]}.${
                item.thumbnail.extension
              }`}
            /> */}
            <TextStyled>{item.name}</TextStyled>
          </Button>
        )}
      />
    </>
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``

Account.propTypes = {}

export default Account