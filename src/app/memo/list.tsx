import { View, StyleSheet, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import MemoList from '../../components/MemoList'
import CircleButton from '../../components/CircleButton'
import Logoutbutton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlepress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])
  const navigation = useNavigation()
  // useEffectは一回画面がレンダリングされた時に実行される
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <Logoutbutton /> }
    })
  }, [])
  // メモのデータの監視
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])
  return (
      <View style={styles.container}>
        {/* 画面下のメモ一覧の設定 */}
        <FlatList
        data={memos}
        renderItem={({ item }) => <MemoList memo={item} />}
        />
        <CircleButton onPress={handlepress}>
            <Feather name='plus' size={40}/>
        </CircleButton>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
