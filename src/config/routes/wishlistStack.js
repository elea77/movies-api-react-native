import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Movie from '../../screens/movie'
import Details from '../../screens/details'
import Wishlist from '../../screens/wishlist'

const Stack = createNativeStackNavigator()

const WishlistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Mes favoris' component={Wishlist} />
      <Stack.Screen name='Film' component={Movie} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default WishlistStack