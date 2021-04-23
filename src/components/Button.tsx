import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface buttonProps extends TouchableOpacityProps {
  title: string
}

export default function Button({ title, ...res }: buttonProps){
  return (
    <TouchableOpacity
      style={styled.container}
      {...res}
    >
      <Text style={styled.text} >
        { title }
      </Text>
    </TouchableOpacity>
  )
}

const styled = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
})