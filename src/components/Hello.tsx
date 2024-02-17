import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  // ?をつけると必須ではなくてオプションになる
  bang?: boolean
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props
  return (
        <View>
            {/* styleをこのように定義した場合、後ろから読まれる */}
            <Text style={[styles.text, style]}>
                {/* {bang ? '!' : ''}はもしTrueなら!、Falseなら''が返ってくる */}
                Hello {children}{bang === true ? '!' : ''}
            </Text>
        </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
