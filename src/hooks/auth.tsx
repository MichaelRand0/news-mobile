import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRedux } from './redux'

export const useAuth = () => {
  const { getActions } = useRedux()
  const { setUser } = getActions()

  const getAsyncUser = async () => {
    const userData = await AsyncStorage?.getItem('user')
    const user = JSON.parse(userData ?? '')
    return user
  }

  const logoutAsync = async () => {
    await AsyncStorage?.removeItem('user')
    setUser(null)
  }

  return {
    getAsyncUser,
    logoutAsync,
  }
}
