import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { type Memo } from '../../types/memo'

interface Props {
  memo: Memo
}

const MemoList = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) { return null }
  const dateString = updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link
    href={{ pathname: '/memo/detail', params: { id: memo.id } }}
    asChild
    >
      <TouchableOpacity style={styles.memoListItem}>
          {/* 左側のメモの名前 */}
          <View>
              <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
              <Text style={styles.memoListItemDate}>{dateString}</Text>
          </View>
          {/* 右側のバツボタン */}
          <TouchableOpacity>
          <Feather name='delete' size={20} color='#B0B0B0'/>
          </TouchableOpacity>
      </TouchableOpacity>
    </Link>
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
