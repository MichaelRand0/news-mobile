import { useDispatch, useSelector } from 'react-redux'
import { useEndpoint } from './endpoint'
import { useQuery } from './query'
import { bindActionCreators } from '@reduxjs/toolkit'
import { newsActions } from '~redux/slices/newsSlice'
import { RootState } from '~redux/store'

export const useNews = () => {
  const { fetchData } = useQuery()
  const { getEndpoint } = useEndpoint()
  const dispatch = useDispatch()
  const state = useSelector((stateValue: RootState) => stateValue.news)
  const actions = bindActionCreators(newsActions, dispatch)
  const { currentNews } = state

  const getNews = async () => {
    const news = await fetchData(getEndpoint('news'))
    return news
  }

  return {
    actions,
    state,
    getNews,
    currentNews,
  }
}
