import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: 'AIzaSyC-LxUoM4lRrOafyAtNuE7W88e15Fm_a_c',
  authDomain: 'memoapp4-e1d6a.firebaseapp.com',
  projectId: 'memoapp4-e1d6a',
  storageBucket: 'memoapp4-e1d6a.appspot.com',
  messagingSenderId: '541158138530',
  appId: '1:541158138530:web:98746b77798c0597bdedfb'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
