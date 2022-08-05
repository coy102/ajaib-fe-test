import { useState, useCallback } from 'react'

import axios, { AxiosRequestConfig } from 'axios'

const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  // ... others config
}

export const useAxios = (config: AxiosRequestConfig) => {
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const result = await axios.request({ ...DEFAULT_CONFIG, ...config })
      setResponse(result.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [config])

  return { fetchData, data: { response, error, loading } }
}
