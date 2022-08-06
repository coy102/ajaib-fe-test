import styled from '@emotion/styled'
import { TableCell } from '@mui/material'
import { fontSize } from '@mui/system'

export const VisuallyHidden = styled('span')({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  top: 20,
  width: 1,
})

interface HeadCellProps {
  width?: string | number
}

export const HeadCell = styled(TableCell)<HeadCellProps>(
  ({ width = 'auto' }) => ({
    fontSize: fontSize[16],
    width,
  })
)
