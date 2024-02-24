import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const MemoList = (): JSX.Element => {
  return (
    <View style={styles.memoListItem}>
        {/* 左側のメモの名前 */}
        <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2024年2月</Text>
        </View>
        {/* 右側のバツボタン */}
        <View>
        <Feather name='delete' size={20} color='#B0B0B0'/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.15)'

  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 16,
    lineHeight: 32,
    color: '#848484'
  }
})

export default MemoList
