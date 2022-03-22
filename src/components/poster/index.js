import React from 'react'
import styled from 'styled-components'

const Poster = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}


const Image = styled.Image`
  width: 160px;
  height: 240px;
`

export default Poster