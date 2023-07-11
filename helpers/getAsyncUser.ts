import AsyncStorage from '@react-native-async-storage/async-storage'

const getAsyncUser = async () => {
  const userData = await AsyncStorage?.getItem('user')
  const user = userData
  return user
}

export default getAsyncUser
