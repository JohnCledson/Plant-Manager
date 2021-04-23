import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import Button from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function UserIdentification(){
  const [isFocused, setIsFocused] = useState(false)
  const [name, setName] = useState<string>()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styled.container} >
      <KeyboardAvoidingView
        style={styled.container}
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <View style={styled.content} >
            <View style={styled.form} >
              <View style={styled.header} >
                <Text style={styled.emoji} >
                  {!!name?'😁':'😀'}
                </Text>

                <Text style={styled.title} >
                  Como podemos{'\n'}chamar você?
                </Text>
              </View>

              <TextInput
                style={[
                  styled.input,
                  isFocused && { borderColor: colors.green }
                ]}
                placeholder='Digite um nome'
                onFocus={() => setIsFocused(true)}
                onBlur={() => !!name?setIsFocused(false):setIsFocused(true)}
                onChangeText={ value => setName(value) }
              />

              <View style={styled.footer} >
                <Button
                  title='Confirmar'
                  onPress={() => !!name && navigation.navigate('Confirmation')}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20
  }
})