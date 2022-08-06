import { UserResponse } from '../types'
import { useAxios } from '../useAxios'

export interface GetUsersParam {
  results: number
}

export const useGetUsers = ({ results }: GetUsersParam) =>
  useAxios<UserResponse>({
    method: 'GET',
    url: `/api/?results=${results}`,
  })
