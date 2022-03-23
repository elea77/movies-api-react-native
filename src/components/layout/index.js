import styled from 'styled-components'

const Grid = styled.View`
  flex: 1
  flexDirection: row
  flexWrap: wrap
  alignItems: flex-start
  margin: 10px
`

const Column = styled.View`
  width: 50%;
`

const Container = styled.ScrollView``

const View = styled.View`
  margin: 10px
`

const InfoLine = styled.View`
  borderBottomWidth: 1px
  borderBottomColor: #888888
`

export { Grid, Column, View, Container, InfoLine }