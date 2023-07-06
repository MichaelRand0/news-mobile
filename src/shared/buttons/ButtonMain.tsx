import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import colors from '~constants/colors'

interface Props extends TouchableOpacityProps {
  variant?: 'PRIMARY' | 'ORANGE'
}

const ButtonMain = (props: Props) => {
  const { onPress, style, children, variant = 'PRIMARY' } = props
  const variantStyle = variant === 'PRIMARY' ? styles.primary : styles.orange
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, variantStyle, style]}>
      {children}
    </TouchableOpacity>
  )
}

export default ButtonMain

const styles = StyleSheet.create({
  container: {
    borderColor: colors.tertiary,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 7,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  orange: {
    borderColor: colors.primary,
    backgroundColor: colors.tertiary,
  },
  primary: {
    borderColor: colors.tertiary,
    backgroundColor: colors.primary,
  },
})
