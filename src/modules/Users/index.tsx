import { memo } from 'react'

import { Box, Pagination } from '@mui/material'

import CustomTable from '~/components/CustomTable'

import FilterBox from './FilterBox'
import { columnsTable } from './helper'
import useHooks from './hooks'

const Users = () => {
  const {
    currentPage,
    debouncedHandleChangeSearch,
    gender,
    handleChangeGender,
    handleChangePage,
    handleRequestSort,
    loading,
    memoUsers,
    sorting,
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
        order={sorting.order}
        orderBy={sorting.orderBy}
        handleRequestSort={handleRequestSort}
        sticky
      />
      <Box my={5} display="flex" flexDirection="row-reverse">
        <Pagination
          count={memoUsers?.info?.results}
          page={currentPage}
          onChange={handleChangePage}
        />
      </Box>
    </Box>
  )
}

export default memo(Users)
