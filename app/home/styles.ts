import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  description: {
    marginBottom: 16,
  },

  error: {
    color: '#ff1744',
  },

  button: {
    width: width - 32,
  }
})

export default styles
