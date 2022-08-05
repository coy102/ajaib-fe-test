import { useEffect, useMemo } from 'react'

import { useGetUsers } from '~/services/hooks/users'

const useHooks = () => {
  const { fetchData, data } = useGetUsers()

  useEffect(() => {
    fetchData()
  }, [])

  const memoUsers = useMemo(() => data?.response, [data])

  return {
    memoUsers,
  }
}

export default useHooks
