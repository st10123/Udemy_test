import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
      <View style={styles.container}>

        {/* 画面上の帯のところの設定 */}
        <View style={styles.header}>
            <View style={styles.headerInner}>
              <Text style={styles.headerTitle}>Memo App</Text>
              <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
        {/* 画面下のメモ一覧の設定 */}
        <View>

            <View style={styles.memoListItem}>
                {/* 左側のメモの名前 */}
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2024年2月</Text>
                </View>
                {/* 右側のバツボタン */}
                <View>
                    <Text>X</Text>
                </View>
            </View>

            <View style={styles.memoListItem}>
                {/* 左側のメモの名前 */}
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2024年2月</Text>
                </View>
                {/* 右側のバツボタン */}
                <View>
                    <Text>X</Text>
                </View>
            </View>

            <View style={styles.memoListItem}>
                {/* 左側のメモの名前 */}
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2024年2月</Text>
                </View>
                {/* 右側のバツボタン */}
                <View>
                    <Text>X</Text>
                </View>
            </View>
        </View>
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>+</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
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
  },
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default Index
