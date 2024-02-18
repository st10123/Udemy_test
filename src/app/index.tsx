import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
      <View style={styles.container}>
        {/* 画面上の帯のところの設定 */}
        <View>
            <View>
              <Text>Memo App</Text>
              <Text>ログアウト</Text>
            </View>
        </View>
        {/* 画面下のメモ一覧の設定 */}
        <View>

            <View>
                {/* 左側のメモの名前 */}
                <View>
                    <Text>買い物リスト</Text>
                    <Text>2024年2月</Text>
                </View>
                {/* 右側のバツボタン */}
                <View>
                    <Text>X</Text>
                </View>
            </View>

            <View>
                {/* 左側のメモの名前 */}
                <View>
                    <Text>買い物リスト</Text>
                    <Text>2024年2月</Text>
                </View>
                {/* 右側のバツボタン */}
                <View>
                    <Text>X</Text>
                </View>
            </View>

            <View>
                {/* 左側のメモの名前 */}
                <View>
                    <Text>買い物リスト</Text>
                    <Text>2024年2月</Text>
                </View>
                {/* 右側のバツボタン */}
                <View>
                    <Text>X</Text>
                </View>
            </View>
        </View>
        <View>
            <Text>+</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
