import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

interface Props extends ViewProps {}

const Container = (props: Props) => {
  const { children, style } = props
  return <View style={[styles.container, style]}>{children}</View>
}

export default Container

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
})
