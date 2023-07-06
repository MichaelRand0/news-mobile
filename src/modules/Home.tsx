import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '~shared/Container'
import colors from '~constants/colors'

const Home = () => {
  return (
    <Container style={styles.container}>
      <Text style={{ color: 'red' }}>Home</Text>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightWhite,
  },
})
