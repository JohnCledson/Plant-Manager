import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Button from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function Confirmation(){
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styled.container} >
      <View style={styled.content} >
        <Text style={styled.emoji} >
          😁
        </Text>

        <Text style={styled.title} >
          Prontinho
        </Text>

        <Text style={styled.subTitle} >
          Agora vamos cuidar das suas plantinhas com muito cuidado! 
        </Text>

        <View style={styled.footer} >
          <Button
            title='Começar'
            onPress={() => navigation.navigate('PlantSelect')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  emoji: {
    fontSize: 78
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15
  },
  subTitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})