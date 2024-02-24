import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
  label: string
  // アローファンクションで書くことで、onPressがファンクションであることを定義。voidにすることで、返り値は何もないことを示している
  onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props
  return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{ label }</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
