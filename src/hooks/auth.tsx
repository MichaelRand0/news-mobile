import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~redux/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { authActions } from '~redux/slices/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const state = useSelector((stateValue: RootState) => stateValue.auth)
  const actions = bindActionCreators(authActions, dispatch)
  const { setUser } = actions

  const logoutAsync = async () => {
    await AsyncStorage?.removeItem('user')
    setUser(null)
  }

  return {
    logoutAsync,
    state,
    actions,
  }
}
