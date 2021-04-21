import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'

export default function Welcome(){
  return (
    <SafeAreaView style={styled.container} >
      <Text style={styled.title} >
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Text>
      <Image source={wateringImg} style={styled.image} />
      <Text style={styled.subTitle} >
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.
      </Text>
      <TouchableOpacity style={styled.button} >
        <Text style={styled.buttonText} >></Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  image: {
    width: 292,
    height: 284
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    width: 56
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})