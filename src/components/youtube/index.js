import React from 'react'
import styled from 'styled-components'
import YoutubePlayer from 'react-native-youtube-iframe';

const Youtube = ({ urlVideo }) => {
  return (
    <YoutubePlayer
        height={250}
        play={false}
        videoId={urlVideo}
      />
  )
}


export default Youtube