import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import colors from '~constants/colors'
import { NewsItemType } from '~models/news'
import { useQuery } from '~hooks/query'
import { useEndpoint } from '~hooks/endpoint'
import { useRedux } from '~hooks/redux'
import { NavigationProp } from '@react-navigation/native'
import { useModal } from '~hooks/modal'

interface Props {
  data: NewsItemType
  navigation: NavigationProp<any>
}

const NewsItem = (props: Props) => {
  const { data, navigation } = props
  const { title, image_url, short_text, id } = data
  const { fetchData } = useQuery()
  const { getEndpoint } = useEndpoint()
  const { getActions } = useRedux()
  const { setCurrentNews } = getActions()
  const { changeContent } = useModal()

  const onPress = async () => {
    changeContent({
      type: 'LOADING',
    })
    const newsData: any = await fetchData(getEndpoint('newsItem', { id }))
    setCurrentNews(newsData?.data?.news)
    navigation.navigate('News')
    changeContent(null)
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.img} source={{ uri: image_url }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{short_text}</Text>
    </TouchableOpacity>
  )
}

export default memo(NewsItem)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },

  img: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    marginBottom: 5,
  },

  text: {
    fontSize: 16,
    color: colors.tertiary,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.tertiary,
  },
})
