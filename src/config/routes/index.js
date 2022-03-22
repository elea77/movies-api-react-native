import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from "react-native";
import { GiPopcorn } from 'react-icons/gi';
import MoviesStack from './moviesStack'
import Home from '../../screens/home'
import Account from '../../screens/account'

const BottomTab = createBottomTabNavigator()


const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='HomeStack' component={MoviesStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (<Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1665/1665346.png"
          }} style={{width: 28, height: 28}} />)
        }} />
        <BottomTab.Screen name='Compte' component={Account}
          options={{
            tabBarIcon: () => (<Image source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            }} style={{width: 28, height: 28}} />)
          }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Routes