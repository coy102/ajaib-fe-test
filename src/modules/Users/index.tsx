import { memo } from 'react'

import { Box } from '@mui/material'

import CustomTable from '~/components/CustomTable'

import FilterBox from './FilterBox'
import { columnsTable } from './helper'
import useHooks from './hooks'

const Users = () => {
  const {
    debouncedHandleChangeSearch,
    gender,
    handleChangeGender,
    loading,
    memoUsers,
  } = useHooks()

  return (
    <Box my={10}>
      <FilterBox
        gender={gender}
        handleChangeGender={handleChangeGender}
        handleChangeSearch={debouncedHandleChangeSearch}
      />
      <CustomTable
        columns={columnsTable}
        data={memoUsers?.results}
        loading={loading}
        sticky
      />
    </Box>
  )
}

export default memo(Users)
