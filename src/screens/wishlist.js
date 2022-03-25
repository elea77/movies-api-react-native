import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFocusEffect } from '@react-navigation/native'
import readWishlist from '../utils/readWishlist'
import { FlatList } from 'react-native';
import ButtonMovie from '../components/btnSmallPoster'
import { CommonText } from '../components/text'

const Wishlist = ({navigation}) => {
  const [fav, setFav] = useState([])

  const addFavToState = async () => {
    const allFav = await readWishlist()
    setFav(allFav)
  }

  useFocusEffect(() => {
    addFavToState()
  })

  useEffect(() => {
    addFavToState()
  }, [])

  useEffect(() => {
    console.log(fav);
  }, [fav])

  return (
    <Container>
        { fav.length ? 
          <FlatList
              data={fav}
              numColumns={3}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ButtonMovie movie={item} navigation={navigation} />
              )}
          />
        : <CommonText>Vous n'avez pas de favoris</CommonText>
        }
    </Container>
  )
}

const Container = styled.SafeAreaView`
  color: white;
  margin: 10px
  marginTop: 20px
`

export default Wishlist