import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '~constants/colors'

interface Props {
  message: string
}

const ModalError = (props: Props) => {
  const {message} = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

export default ModalError

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: colors.lightWhite,
  },

  text: {
    color: 'red',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.8,
    textAlign: 'center',
  },
})
