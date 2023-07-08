import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '~redux/slices/authSlice'
import { modalActions } from '~redux/slices/modalSlice'
import { RootState } from '~redux/store'

const actions = {
  ...authActions,
  ...modalActions,
}

export const useRedux = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state: RootState) => state)

  const getActions = () => {
    return bindActionCreators(actions, dispatch)
  }

  const getState = () => {
    return selector
  }

  return {
    getActions,
    getState,
  }
}
