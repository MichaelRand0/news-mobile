import { create } from 'apisauce'
import { useEffect, useState } from 'react'
import { useRedux } from './redux'
import { AxiosRequestConfig } from 'axios'

type Endpoint = {
  url: string
  method: 'GET' | 'POST' | 'DELETE' | 'PUT'
}

export const useQuery = (endpoint: Endpoint, params?: AxiosRequestConfig<any>) => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { getStates } = useRedux()
  const { auth } = getStates()
  const { user } = auth
  const { url, method } = endpoint

  const api = create({
    baseURL: 'http://lzone.secret-agents.ru',
    headers: {
      Authorization: user?.token,
    },
  })

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const res = await api.any({ method, url, params })
      setData(res?.data)
      setIsLoading(false)
    } catch (err: any) {
      setError(err)
      console.error('there is an error', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = async () => {
    fetchData()
  }

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}
