import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

import Header from '../../components/Header'
import MemoList from '../../components/MemoList'
import CircleButton from '../../components/CircleButton'

const handlepress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  return (
      <View style={styles.container}>

        {/* 画面上の帯のところの設定 */}
        <Header />
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
