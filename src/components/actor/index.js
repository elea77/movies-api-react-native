import React from 'react'
import styled from 'styled-components'

const Actor = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}


const Image = styled.Image`
  width: 120px;
  height: 120px;
  borderRadius: 120px
`

export default Actor