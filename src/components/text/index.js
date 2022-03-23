import styled from 'styled-components'

const TitleMovie = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-bottom: 15px
`

const TitleList = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: white;
`

const Legend = styled.Text`
  font-size: 14px;
  color: #888888;
  margin: 10px 0
`

const CommonText = styled.Text`
  color: white;
`

const CommonTextRight = styled.Text`
  color: #888888
  textAlign: right
  fontWeight: bold
`

const SmallTitleMovie = styled.Text`
  color: white
  fontSize: 14px;
  textAlign: center
`

const SmallLegend = styled.Text`
  fontSize: 12px;
  color: #888888;
  textAlign: center
`

export { TitleMovie, Legend, CommonText, CommonTextRight, TitleList, SmallLegend, SmallTitleMovie }