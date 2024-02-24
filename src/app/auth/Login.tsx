import { View, Text, TextInput, StyleSheet, TouchableOpacity,Alert } from 'react-native'
import { useState } from 'react'
import Button from '../../components/Button'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth  } from '../../config'
import { Link, router } from 'expo-router'

const hundlePress = (email: string, paassword: string): void => {
  // ログイン
  signInWithEmailAndPassword(auth, email, paassword)
    .then((userCredential) => {
      router.replace('memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      Alert.alert(message)
    })
}

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={ styles.container }>
        <View style={styles.inner}>
            <Text style={styles.title}>Log In</Text>
            <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => { setEmail(text) }}
            autoCapitalize='none'
            keyboardType='email-address'
            placeholder='Email Address'
            textContentType='emailAddress'
            />
            <TextInput style={styles.input}
            value={password}
            onChangeText={(text) => { setPassword(text) }}
            autoCapitalize='none'
            secureTextEntry
            placeholder='Password'
            textContentType='password'
            />
            <Button label='Submit' onPress={() => { hundlePress(email, password) }}/>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Not registered?</Text>
                <Link href='/auth/Signup' asChild>
                    <TouchableOpacity>
                    <Text style={styles.footerLink}>Sign up here!</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default Login
