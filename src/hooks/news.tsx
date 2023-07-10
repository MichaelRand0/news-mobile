import { useEndpoint } from './endpoint'
import { useQuery } from './query'

export const useNews = () => {
  const { fetchData } = useQuery()
  const { getEndpoint } = useEndpoint()
  const getNews = async () => {
    const news = await fetchData(getEndpoint('news'))
    return news
  }

  return {
    getNews,
  }
}
