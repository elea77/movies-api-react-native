import React from 'react'
import styled from 'styled-components'

const Icon = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  )
}


const Image = styled.Image`
  width: 100px;
  height: 150px;
  borderRadius: 15px
`

export default Icon