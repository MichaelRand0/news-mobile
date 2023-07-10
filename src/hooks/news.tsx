import { useEndpoint } from './endpoint'
import { useQuery } from './query'
import { useRedux } from './redux'

export const useNews = () => {
  const { fetchData } = useQuery()
  const { getEndpoint } = useEndpoint()
  const { getState } = useRedux()
  const { currentNews } = getState().news

  const getNews = async () => {
    const news = await fetchData(getEndpoint('news'))
    return news
  }

  return {
    getNews,
    currentNews,
  }
}
