import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from '../../screens/search'
import Movie from '../../screens/movie'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Recherche' component={Search} />
      <Stack.Screen name='Film' component={Movie} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default SearchStack