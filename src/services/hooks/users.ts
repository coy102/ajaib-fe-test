import { useEffect } from 'react'

import { REQUESTED_ORDER_MAPPING } from '~/config/constants'

import { UserResponse } from '../types'
import { useAxios } from '../useAxios'

export interface GetUsersParam {
  gender?: string
  keyword?: string
  order?: string
  orderBy?: string
  page: number
  results: number
}

export const useGetUsers = ({
  gender,
  keyword,
  order,
  orderBy,
  page,
  results,
}: GetUsersParam) => {
  let url = `/api/?results=${results}&page=${page}`

  if (keyword) {
    url += `&keyword=${keyword}`
  }

  if (gender && gender !== 'All') {
    url += `&gender=${gender.toLowerCase()}`
  }

  if (orderBy && order) {
    url += `&sortBy=${orderBy}&sortOrder=${REQUESTED_ORDER_MAPPING[order]}`
  }

  const { fetchData, data } = useAxios<UserResponse>({
    method: 'GET',
    url,
  })

  useEffect(() => {
    fetchData()
  }, [results, keyword, gender, page, orderBy, order])

  return {
    data,
  }
}
