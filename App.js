import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { StyleSheet, useColorScheme } from 'react-native'
import { DefaultTheme } from '@react-navigation/native';

import { lightTheme, darkTheme } from './src/config/theme'
import Routes from './src/config/routes'


const App = () => {

  return (
    <ThemeProvider theme={darkTheme} >
      <Routes />
    </ThemeProvider>
  )
}


export default App