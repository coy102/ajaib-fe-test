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
    handleClickResetFilter,
    handleRequestSort,
    loading,
    memoUsers,
    searchRef,
    sorting,
  } = useHooks()

  return (
    <Box my={10}>
      <FilterBox
        gender={gender}
        handleChangeGender={handleChangeGender}
        handleClickResetFilter={handleClickResetFilter}
        handleChangeSearch={debouncedHandleChangeSearch}
        searchRef={searchRef}
      />
      <CustomTable
        columns={columnsTable}
        data={memoUsers?.results}
        handleRequestSort={handleRequestSort}
        loading={loading}
        order={sorting.order}
        orderBy={sorting.orderBy}
        sticky
      />
      <Box my={5} display="flex" flexDirection="row-reverse">
        <Pagination
          count={memoUsers?.info?.results}
          onChange={handleChangePage}
          page={currentPage}
        />
      </Box>
    </Box>
  )
}

export default memo(Users)
