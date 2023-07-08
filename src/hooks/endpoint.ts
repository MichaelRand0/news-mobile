import { Endpoint } from '~models/query'

type EndpointName = 'auth'

export const useEndpoint = () => {
  const getEndpoint = (name: EndpointName): Endpoint => {
    switch (name) {
      case 'auth':
        return {
          url: 'auth/sign_in',
          method: 'POST',
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
