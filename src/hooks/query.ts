import { create } from 'apisauce'
import { useState } from 'react'
import urls from '~constants/urls'
import { Endpoint } from '~models/query'

export const useQuery = () => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const api = create({
    baseURL: urls.base,
  })

  const fetchData = async (endpoint: Endpoint, params?: any) => {
    const { url, method } = endpoint
    setIsLoading(true)
    try {
      const res = await api.any({ method, url, params })
      setData(res?.data)
      setIsLoading(false)
      return res?.data
    } catch (err: any) {
      setError(err)
      console.error('there is an error', err)
      return {
        data: {
          success: false,
          error: err,
        },
      }
    }
  }

  return {
    data,
    isLoading,
    error,
    fetchData,
  }
}
