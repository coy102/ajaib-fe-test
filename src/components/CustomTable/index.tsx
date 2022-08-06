import React, { memo } from 'react'

import { Box, Paper, Table } from '@mui/material'

import TableBody from './Body'
import CustomTableHead, { ColDefProps } from './Head'
import useHooks from './hooks'
import { StyledTableContainer } from './style'

interface Props {
  columns: Array<ColDefProps>
  data: Array<any>
  height?: number | string
  loading?: boolean
  size?: 'small' | 'medium'
  sticky?: boolean
}

const CustomTable = ({
  columns,
  data = [],
  height = 400,
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
    <Box position="relative">
      <Paper>
        <StyledTableContainer sticky={sticky} height={height}>
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
        </StyledTableContainer>
      </Paper>
    </Box>
  )
}

export type ColDef = ColDefProps

export default memo(CustomTable)
