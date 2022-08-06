import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { debounce } from 'lodash'
import { useRouter } from 'next/router'

import { GENDER_OPTIONS } from '~/config/constants'
import { useGetUsers } from '~/services/hooks/users'

import { DEFAULT_PARAM_USERS, DEFAULT_SORTING, SortingState } from './helper'

const useHooks = () => {
  const allGender = GENDER_OPTIONS[0]

  const [search, setSearch] = useState('')
  const [gender, setGender] = useState(allGender) // Default value "All"
  const [sorting, setSorting] = useState<SortingState>(DEFAULT_SORTING)

  const searchRef = useRef(null)

  const { push, query } = useRouter()

  const currentPage = useMemo(() => Number(query?.page) || 1, [query])

  // init api get random users
  const { data } = useGetUsers({
    ...DEFAULT_PARAM_USERS,
    ...sorting,
    keyword: search,
    page: currentPage,
    gender,
  })

  // memoized random users data
  const memoUsers = useMemo(() => data?.response, [data])

  // handle search
  const handleChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value
      setSearch(keyword)
      if (keyword) {
        // reset parameter when keyword is not empty
        push(`/?page=1`)
      }
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

  // handle change page option
  const handleChangePage = useCallback((_, page) => {
    push(`/?page=${page}`)
  }, [])

  // handle click sorting column
  const handleRequestSort = useCallback(
    (_, property) => {
      const isAsc = sorting.orderBy === property && sorting.order === 'asc'

      setSorting({
        orderBy: property,
        order: isAsc ? 'desc' : 'asc',
      })
    },
    [sorting]
  )

  // handle reset all filter (search and gender)
  const handleClickResetFilter = useCallback(() => {
    // becouse we are using uncontroller input, we need to reset the value using ref
    searchRef.current.value = ''
    setSearch('')
    setGender(allGender)
    setSorting(DEFAULT_SORTING)
  }, [])

  useEffect(
    () => () => {
      // clear debounce on unmount
      debouncedHandleChangeSearch.cancel()
    },
    []
  )

  return {
    loading: data.loading,
    currentPage,
    debouncedHandleChangeSearch,
    gender,
    handleChangeGender,
    handleChangePage,
    handleClickResetFilter,
    handleRequestSort,
    memoUsers,
    searchRef,
    sorting,
  }
}

export default useHooks
