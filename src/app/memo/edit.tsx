import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Editor = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
        <Header />
        <View style={styles.inputContainer}>
            <TextInput multiline style={styles.input} value= {'買い物\nリスト'} />
        </View>
        <CircleButton>
            <Feather name='plus' size={40}/>
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