import { AxiosRequestConfig } from 'axios'

import { UserResponse } from '../types'
import { useAxios } from '../useAxios'

export const useGetUsers = (config: AxiosRequestConfig = {}) =>
  useAxios<UserResponse>({
    ...config,
    method: 'GET',
    url: '/api/?page=1&results=10',
  })
