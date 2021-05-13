import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface EnviromentButtonProps extends RectButtonProps {
  title: string,
  active?: boolean
}

export default function EnviromentButton ({
  title,
  active = false,
  ...rest
} : EnviromentButtonProps){
  return(
    <RectButton
      style={[
        styled.container,
        active && styled.containerActivi
      ]}
      {...rest}
    >
      <Text style={[
          styled.text,
          active && styled.textActive
        ]} >
        {title}
      </Text>
    </RectButton>
  )
}

const styled = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActivi: {
    backgroundColor: colors.green_light
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark
  }
})