import React from 'react'
import styled from 'styled-components'
import Star from 'react-native-star-view';

const Rating = ({ note }) => {
    return (
        <View>
            <Star score={note} style={{ width: 140, heigh: 10}} />
            <Round>
                <Text>{note}</Text>
            </Round>
        </View>
    )
}

const View = styled.View`
    backgroundColor: #121212
    borderWidth: 1px
    borderColor: #353535
    borderRadius: 10px
    flex: 1
    flexDirection: row
    alignItems: center
    justifyContent: center
    padding: 10px
`

const Round = styled.View`
    backgroundColor: #353535
    borderWidth: 1px
    borderRadius: 20px
    padding: 5px 10px
    marginLeft: 10px
`

const Text = styled.Text`
    color: white
    fontWeight: bold
`

export default Rating