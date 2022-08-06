import { useEffect } from 'react'

import { UserResponse } from '../types'
import { useAxios } from '../useAxios'

export interface GetUsersParam {
  page: number
  results: number
  keyword?: string
  gender?: string
}

export const useGetUsers = ({
  results,
  page,
  keyword = '',
  gender = '',
}: GetUsersParam) => {
  let url = `/api/?results=${results}&page=${page}`

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
  }, [results, keyword, gender, page])

  return {
    data,
  }
}
