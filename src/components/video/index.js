import React from 'react'
import styled from 'styled-components'
import VideoPlayer from 'react-native-video-player'

const Video = ({ urlVideo, urlImage }) => {
  return (
    <VideoPlayer
        video={{
            uri: urlVideo
        }}
        videoWidth={350}
        videoHeight={200}
        thumbnail={{ uri: urlImage }}
    />
  )
}


export default Video