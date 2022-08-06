import { memo } from 'react'

import CustomTable from '~/components/CustomTable'

import { columnsTable } from './helper'
import useHooks from './hooks'

const Users = () => {
  const { loading, memoUsers } = useHooks()

  return (
    <>
      <CustomTable
        columns={columnsTable}
        data={memoUsers?.results}
        loading={loading}
      />
    </>
  )
}

export default memo(Users)
