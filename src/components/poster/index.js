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
  width: 250px;
  height: 375px;
`
export default Poster