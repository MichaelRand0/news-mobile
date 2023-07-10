import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import colors from '~constants/colors'
import { NewsItemType } from '~models/news'

interface Props {
  data: NewsItemType
}

const NewsItem = (props: Props) => {
  const { data } = props
  const { title, image_url, short_text } = data
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: image_url }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{short_text}</Text>
    </View>
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
