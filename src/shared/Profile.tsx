import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { User } from '~models/user'
import colors from '~constants/colors'

interface Props {
  user: User
}

const Profile = (props: Props) => {
  const {user} = props
  return (
    <View style={styles.container}>
      {user?.avatar_url && <Image style={styles.avatar} source={{uri: user?.avatar_url}} />}
      <Text style={styles.name}>{user?.username}</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.tertiary,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 60,
    marginRight: 10,
  }
})