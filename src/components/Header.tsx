import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../styles/colors'
import userImg from '../assets/38230852.jpg'
import fonts from '../styles/fonts'

export default function Header(){
  return (
    <View style={styled.container} >
      <View  >
        <Text style={styled.greeting} >Olá,</Text>
        <Text style={styled.userName} >John</Text>
      </View>
      <Image source={userImg} style={styled.image} />
    </View>
  )
}

const styled = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
})