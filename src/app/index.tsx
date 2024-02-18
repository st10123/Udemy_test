import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header'
import MemoList from '../components/MemoList'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
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
        <CircleButton>+</CircleButton>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default Index
