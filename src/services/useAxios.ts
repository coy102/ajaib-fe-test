import { useState, useCallback } from 'react'

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me/',
  // ... others config
}

export const useAxios = <T>(baseConfig: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const result = await axios.request<T, AxiosResponse<T>>({
        ...DEFAULT_CONFIG,
        ...baseConfig,
      })
      setResponse(result.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [baseConfig])

  return { fetchData, data: { response, error, loading } }
}
