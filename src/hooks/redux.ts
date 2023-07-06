import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '~redux/slices/authSlice'
import { RootState } from '~redux/store'

const actions = {
  ...authActions,
}

export const useRedux = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state: RootState) => state)

  const getActions = () => {
    return bindActionCreators(actions, dispatch)
  }

  const getState = (name: keyof RootState) => {
    return selector[name]
  }

  return {
    getActions,
    getState,
  }
}
