import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'

import MemoList from '../../components/MemoList'
import CircleButton from '../../components/CircleButton'
import Logoutbutton from '../../components/LogOutButton'

const handlepress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  // useEffectは一回画面がレンダリングされた時に実行される
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <Logoutbutton /> }
    })
  }, [])
  return (
      <View style={styles.container}>
        {/* 画面下のメモ一覧の設定 */}
        <View>
            <MemoList />
            <MemoList />
            <MemoList />
        </View>
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
