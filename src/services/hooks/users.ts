import { useEffect } from 'react'

import { REQUESTED_ORDER_MAPPING } from '~/config/constants'

import { UserResponse } from '../types'
import useAxios from '../useAxios'

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
  // set default url
  let url = `/api/?results=${results}&page=${page}`

  // set gender query param when gender is not empty or not 'All'
  if (keyword) {
    url += `&keyword=${keyword}`
  }

  // set gender query param when gender is not empty or not 'All'
  if (gender && gender !== 'All') {
    url += `&gender=${gender.toLowerCase()}`
  }

  // set orderBy and order query param when gender is not empty
  // using mapping order
  if (orderBy && order) {
    url += `&sortBy=${orderBy}&sortOrder=${REQUESTED_ORDER_MAPPING[order]}`
  }

  // init useAxios get
  const { fetchData, data } = useAxios<UserResponse>({
    method: 'GET',
    url,
  })

  useEffect(() => {
    // Call fetch data and detect query param
    fetchData()
  }, [results, keyword, gender, page, orderBy, order])

  return {
    data,
  }
}
