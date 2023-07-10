import { Endpoint } from '~models/query'

type EndpointName = 'auth' | 'news' | 'newsItem'

export const useEndpoint = () => {
  const getEndpoint = (name: EndpointName): Endpoint => {
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
