import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { StyleSheet, useColorScheme } from 'react-native'

import { lightTheme, darkTheme } from './src/config/theme'
import Routes from './src/config/routes'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes />
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
})

export default App