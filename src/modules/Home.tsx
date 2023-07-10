import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Container from '~shared/Container'
import colors from '~constants/colors'
import { useNews } from '~hooks/news'
import { useRedux } from '~hooks/redux'
import NewsItem from './components/news/NewsItem'
import { useModal } from '~hooks/modal'
import { NavigationProp } from '@react-navigation/native'

interface Props {
  navigation: NavigationProp<any>
}

const Home = (props: Props) => {
  const {navigation} = props
  const { getNews } = useNews()
  const { getActions, getState } = useRedux()
  const { setNews } = getActions()
  const { news } = getState().news
  const { changeContent } = useModal()

  useEffect(() => {
    ;(async () => {
      const newsData: any = await getNews()
      setNews(newsData?.data?.news)
    })()
  }, [])
  const onEndReached = async () => {
    changeContent({
      type: 'LOADING',
    })
    const newsData: any = await getNews()
    changeContent(null)
    const concatted = news.concat(newsData?.data?.news)
    setNews(concatted)
  }
  return (
    <Container style={styles.container}>
      <FlatList
        onEndReached={onEndReached}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <NewsItem navigation={navigation} data={item} />}
        data={news}
        ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
      />
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightWhite,
  },
})
