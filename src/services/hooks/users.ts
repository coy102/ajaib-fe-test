import { AxiosRequestConfig } from 'axios'

import { useAxios } from '../useAxios'

export const useGetUsers = (config: AxiosRequestConfig = {}) =>
  useAxios({
    ...config,
    method: 'GET',
    url: '/posts',
  })
