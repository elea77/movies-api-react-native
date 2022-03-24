import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFocusEffect } from '@react-navigation/native'
import readWishlist from '../utils/readWishlist'
import { FlatList } from 'react-native';
import Icon from '../components/icon'
import { SmallTitleMovie, CommonText, Legend} from '../components/text'

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
    console.log("fav", fav)
  }, [fav])

  return (
    <Container>
        <FlatList
            data={fav}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Button
                    onPress={() => navigation.navigate('Film', { id: item.id })} >
                    <Icon
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
const Button = styled.TouchableOpacity`
  width: auto
  margin: auto
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

export default Wishlist