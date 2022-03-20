import React from 'react'
import styled from 'styled-components'
import VideoPlayer from 'react-native-video-player'

const Video = ({ urlVideo }) => {
  return (
    <VideoPlayer
        video={{
            uri: urlVideo
        }}
        videoWidth={350}
        videoHeight={200}
        thumbnail={{ uri: 'https://fakeimg.pl/350x200/' }}
    />
  )
}


export default Video