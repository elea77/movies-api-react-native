import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/home'
import Movie from '../../screens/movie'
import MoviesList from '../../screens/moviesList'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const MoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Cinéma' component={Home} />
      <Stack.Screen name='Liste des films' component={MoviesList} />
      <Stack.Screen name='Film' component={Movie} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default MoviesStack