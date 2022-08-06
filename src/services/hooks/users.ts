import { useEffect } from 'react'

import { UserResponse } from '../types'
import { useAxios } from '../useAxios'

export interface GetUsersParam {
  results?: number
  keyword?: string
  gender?: string
}

export const useGetUsers = ({
  results,
  keyword = '',
  gender = '',
}: GetUsersParam) => {
  let url = `/api/?results=${results}`

  if (keyword) {
    url += `&keyword=${keyword}`
  }

  if (gender && gender !== 'All') {
    url += `&gender=${gender.toLowerCase()}`
  }

  const { fetchData, data } = useAxios<UserResponse>({
    method: 'GET',
    url,
  })

  useEffect(() => {
    fetchData()
  }, [results, keyword, gender])

  return {
    data,
  }
}
