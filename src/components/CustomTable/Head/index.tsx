import { TableHead, TableRow, TableSortLabel } from '@mui/material'

import { HeadCell, VisuallyHidden } from './style'

export interface ColDefProps {
  align?: 'center' | 'left' | 'right'
  field: string
  headerName: string | React.ReactNode
  minWidth?: number
  width?: number
  renderCell?: any
  sorting?: boolean
}

interface Props {
  columnHead: ColDefProps[]
  order?: 'asc' | 'desc'
  orderBy?: string
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void
}

const EnhancedTableHead = ({
  columnHead,
  order,
  orderBy,
  onRequestSort,
}: Props) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {columnHead?.map((headCell) => (
          <HeadCell
            key={headCell.field}
            align={headCell.align}
            sortDirection={orderBy === headCell.field ? order : false}
            style={{ minWidth: headCell.minWidth, width: headCell.width }}
          >
            {headCell.sorting ? (
              <TableSortLabel
                active={orderBy === headCell.field}
                direction={orderBy === headCell.field ? order : 'asc'}
                onClick={createSortHandler(headCell.field)}
              >
                {headCell.headerName}
                {orderBy === headCell.field ? (
                  <VisuallyHidden>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </VisuallyHidden>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.headerName
            )}
          </HeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
