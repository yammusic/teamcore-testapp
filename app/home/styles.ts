import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  button: {
    width: width - 32,
  }
})

export default styles
