import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from "react-native";
import { GiPopcorn } from 'react-icons/gi';
import MoviesStack from './moviesStack'
import Search from '../../screens/search'
import Wishlist from '../../screens/wishlist'
import FlashMessage from 'react-native-flash-message'

const BottomTab = createBottomTabNavigator()


const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Accueil' component={MoviesStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (<Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1665/1665346.png"
          }} style={{width: 28, height: 28}} />)
        }} />
        <BottomTab.Screen name='Mes favoris' component={Wishlist}
          options={{
            tabBarIcon: () => (<Image source={{
              uri: "https://cdn-icons-png.flaticon.com/512/126/126471.png"
            }} style={{width: 28, height: 28}} />)
          }} />
        <BottomTab.Screen name='Recherche' component={Search}
          options={{
            tabBarIcon: () => (<Image source={{
              uri: "https://cdn-icons-png.flaticon.com/512/622/622669.png"
            }} style={{width: 26, height: 26}} />)
          }} />
      </BottomTab.Navigator>
      <FlashMessage position='top' />
    </NavigationContainer>
  )
}

export default Routes