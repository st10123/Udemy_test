import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import MemoList from '../../components/MemoList'
import CircleButton from '../../components/CircleButton'

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
        <CircleButton>
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
