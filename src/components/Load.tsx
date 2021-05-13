import React from 'react'

import LottieView from 'lottie-react-native'

import loadAnimation from '../assets/load.json'
import { StyleSheet, View } from 'react-native'

export default function Load(){
  return (
    <View style={styled.container} >
      <LottieView
        soucer={loadAnimation}
        autoPlay
        loop
        style={styled.animation}
      />
    </View>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    backgroundColor: 'tranparent',
    width: 200,
    height: 200
  }
})