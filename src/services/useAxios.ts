import { useState, useCallback } from 'react'

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me/',
  // ... others config
}

export const useAxios = <T>(config: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.request<T, AxiosResponse<T>>({
        ...DEFAULT_CONFIG,
        ...config,
      })
      setResponse(result.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [config])

  return { fetchData, data: { response, error, loading } }
}
