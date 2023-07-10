import { Endpoint } from '~models/query'

type EndpointName = 'auth' | 'news' | 'newsItem'

export const useEndpoint = () => {
  const getEndpoint = (name: EndpointName, params?: any): Endpoint => {
    switch (name) {
      case 'auth':
        return {
          url: 'auth/sign_in',
          method: 'POST',
        }

      case 'news':
        return {
          url: 'news',
          method: 'GET',
        }

      case 'newsItem':
        return {
          url: `news/${params?.id}`,
          method: 'GET',
        }
      default:
        return {
          url: 'auth/sign_in',
          method: 'POST',
        }
    }
  }

  return {
    getEndpoint,
  }
}
