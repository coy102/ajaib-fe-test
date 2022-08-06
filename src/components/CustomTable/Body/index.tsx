import React from 'react'

import { TableBody, TableCell, TableRow } from '@mui/material'
import shortid from 'shortid'

import EmptyState from '~/components/Message/EmptyState'
import LoadingState from '~/components/Message/LoadingState'

import Cell from '../Cell'

interface Props {
  colSpan: number
  columns: any[]
  isNotEmpty: boolean
  loading: boolean
  transformedDataSource: any[]
}

function Body({
  colSpan,
  columns,
  isNotEmpty,
  loading,
  transformedDataSource,
}: Props) {
  if (loading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={colSpan}>
            <LoadingState />
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }

  if (!isNotEmpty) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={colSpan}>
            <EmptyState />
          </TableCell>
        </TableRow>
      </TableBody>
    )
  }

  return (
    <TableBody>
      {transformedDataSource?.map((rowData) => (
        <React.Fragment key={shortid.generate()}>
          <TableRow hover>
            {columns.map((col) => {
              const value = rowData[col.field]
              return (
                <TableCell key={col.field} align={col.align}>
                  <Cell size="small">
                    {col.renderCell ? col.renderCell(rowData) : value}
                  </Cell>
                </TableCell>
              )
            })}
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
  )
}

export default Body
