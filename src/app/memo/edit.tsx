import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'

const handlepress = (): void => {
  router.back()
}

const Editor = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput multiline style={styles.input} value= {'買い物\nリスト'} />
        </View>
        <CircleButton onPress={handlepress}>
            <Feather name='check' size={40}/>
        </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Editor
