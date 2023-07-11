import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { ContentType } from '~models/modal'
import { modalActions } from '~redux/slices/modalSlice'
import { RootState } from '~redux/store'

export const useModal = () => {
  const dispatch = useDispatch()
  const state = useSelector((stateValue: RootState) => stateValue.modal)
  const actions = bindActionCreators(modalActions, dispatch)
  const { setContent } = actions
  const { content: reduxContent } = state

  const changeContent = (content: ContentType) => {
    setContent(content)
  }

  return {
    content: reduxContent,
    actions,
    state,
    changeContent,
  }
}
