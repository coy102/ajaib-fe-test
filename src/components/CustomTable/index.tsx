import React from 'react'

import { Box, Paper, Table, TableContainer } from '@mui/material'

import TableBody from './Body'
import CustomTableHead, { ColDefProps } from './Head'
import useHooks from './hooks'

// interface PaginationOptions {
//   active?: boolean
//   current?: number
//   totalPage?: number
//   onChangePage?(e: any, newPage: any): void
//   onRowsPerPageChange?: (value) => void
//   rowsPerPage?: number
// }

interface Props {
  columns: Array<ColDefProps>
  data: Array<any>
  loading?: boolean
  size?: 'small' | 'medium'
  sticky?: boolean
}

const CustomTable = ({
  columns,
  data = [],
  loading = false,
  size = 'medium',
  sticky = false,
}: Props) => {
  const {
    order,
    orderBy,
    handleRequestSort,
    transformedDataSource,
  } = useHooks({ data })

  const isNotEmpty = transformedDataSource.length > 0

  return (
    <>
      <Box position="relative">
        <Paper>
          <TableContainer>
            <Table size={size} stickyHeader={sticky} aria-label="sticky table">
              <CustomTableHead
                order={order}
                columnHead={columns}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody
                colSpan={columns.length}
                columns={columns}
                isNotEmpty={isNotEmpty}
                loading={loading}
                transformedDataSource={transformedDataSource}
              />
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  )
}

export type ColDef = ColDefProps

export default CustomTable
