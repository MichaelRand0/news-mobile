import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import React from 'react'
import colors from '~constants/colors'

interface Props extends TextInputProps {
  error?: string | null
  containerStyle?: StyleProp<ViewStyle>
}

const InputMain = (props: Props) => {
  const { error, containerStyle} = props
  const errorStyle = error
    ? {
        borderColor: 'red',
        color: 'red',
      }
    : {}
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholderTextColor={colors.primaryLight}
        style={[styles.input, errorStyle]}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default InputMain

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.primaryLight,
    fontSize: 17,
    color: colors.primary,
    paddingBottom: 3,
  },
  error: {
    fontSize: 12,
    color: 'red',
    paddingLeft: 5,
  },
})
