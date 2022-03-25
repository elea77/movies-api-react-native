import React from 'react'
import styled from 'styled-components'
import SmallPoster from '../smallPoster'

const ButtonSmall = ({ movie, navigation }) => {
  return (
    <Button
      onPress={() => navigation.navigate('Film', { id: movie.id })} >
        <SmallPoster
            urlImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <MovieTitle ellipsizeMode='tail' numberOfLines={1}>{movie.title}</MovieTitle>
    </Button>
  )
}

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

export default ButtonSmall