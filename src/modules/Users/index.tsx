import { memo } from 'react'

import useHooks from './hooks'

const Users = () => {
  const { memoUsers } = useHooks()

  return <>{JSON.stringify(memoUsers)}</>
}

export default memo(Users)
