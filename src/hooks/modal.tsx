import { ContentType } from '~models/modal'
import { useRedux } from './redux'

export const useModal = () => {
  const { getState, getActions } = useRedux()
  const { content: reduxContent } = getState().modal
  const { setContent } = getActions()

  const changeContent = (content: ContentType) => {
    setContent(content)
  }

  return {
    content: reduxContent,
    changeContent,
  }
}
