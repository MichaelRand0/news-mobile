import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNews } from '~hooks/news'
import colors from '~constants/colors'
import Container from '~shared/Container'
import ButtonMain from '~shared/buttons/ButtonMain'
import { NavigationProp } from '@react-navigation/native'

interface Props {
  navigation: NavigationProp<any>
}

const News = (props: Props) => {
  const { navigation } = props
  const { currentNews } = useNews()
  const goBack = () => {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: currentNews?.image_url }} />
      <Container>
        <Text style={styles.title}>{currentNews?.title}</Text>
        <Text style={styles.text}>{currentNews?.short_text}</Text>
        <View style={styles.wrapper}>
          <Text style={styles.date}>{currentNews?.created_at.toString().slice(0, 10)}</Text>
          <ButtonMain onPress={goBack} variant="ORANGE" style={{ width: 200, marginLeft: 'auto' }}>
            <Text style={styles.btnText}>К ленте новостей</Text>
          </ButtonMain>
        </View>
      </Container>
    </View>
  )
}

export default News

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: colors.primary,
    paddingBottom: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.tertiary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.tertiary,
    marginBottom: 50,
  },
  date: {
    fontSize: 12,
    color: colors.gray,
  },
})
