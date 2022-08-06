import styled from '@emotion/styled'
import { TableContainer } from '@mui/material'

interface StyledTableContainerProps {
  height?: number | string
  sticky?: boolean
}

export const StyledTableContainer = styled(
  TableContainer
)<StyledTableContainerProps>(({ height, sticky }) => ({
  height: sticky ? height : '100%',
  overflow: 'auto',
  maxWidth: '100%',
}))
