import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'

import CircleButton from '../../components/CircleButton'
import { db, auth } from '../../config'

const handlepress = (bodyText: string): void => {
//   メモ作成のコード
  if (auth.currentUser === null) { return }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      console.log('success')
    })
    .catch((error) => {
      console.log(error)
    })
  router.back()
}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
            multiline
            style={styles.input}
            value= {bodyText}
            onChangeText={(text) => { setBodyText(text) }}
            autoFocus
            />
        </View>
        <CircleButton onPress={() => { handlepress(bodyText) }}>
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

export default Create
