import { useCallback, useEffect, useMemo, useState } from 'react'

import { debounce } from 'lodash'

import { GENDER_OPTIONS } from '~/config/constants'
import { useGetUsers } from '~/services/hooks/users'

import { DEFAULT_PARAM_USERS } from './helper'

const useHooks = () => {
  const [search, setSearch] = useState('')
  const [gender, setGender] = useState(GENDER_OPTIONS[0]) // Default value "All"

  // init api get random users
  const { fetchData, data } = useGetUsers({
    ...DEFAULT_PARAM_USERS,
  })

  // memoized random users data
  const memoUsers = useMemo(() => data?.response, [data])

  // handle search
  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    []
  )

  // handle debounce search
  const debouncedHandleChangeSearch = useMemo(
    () => debounce(handleChangeSearch, 500),
    []
  )

  // handle change gender option
  const handleChangeGender = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setGender(e.target.value)
    },
    []
  )

  useEffect(() => {
    fetchData()

    return () => {
      // clear debounce on unmount
      debouncedHandleChangeSearch.cancel()
    }
  }, [])

  return {
    loading: data.loading,
    debouncedHandleChangeSearch,
    gender,
    handleChangeGender,
    memoUsers,
    search,
  }
}

export default useHooks
