import React from 'react'
import styled from 'styled-components'
import Poster from '../poster'

const ButtonBig = ({ navigation, movie }) => {
  return (
    <Button
      onPress={() => navigation.navigate('Film', { id: movie.id })} >
        <Poster
            urlImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <MovieTitle ellipsizeMode='tail' numberOfLines={1}>{movie.title}</MovieTitle>
    </Button>
  )
}



const MovieTitle = styled.Text`
  color: white
  textAlign: center
  marginTop: 5px
  marginBottom: 10px
  fontWeight: bold
  fontSize: 14px
  width: 160px
`

const Button = styled.TouchableOpacity``


export default ButtonBig