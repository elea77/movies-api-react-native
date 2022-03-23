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
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='MoviesList' component={MoviesList} />
      <Stack.Screen name='Movie' component={Movie} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default MoviesStack