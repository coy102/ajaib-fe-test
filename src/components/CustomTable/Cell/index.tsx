import React from 'react'

import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

import { fontSize } from '~/styles/theme'

interface StyledCellProps {
  bold: boolean
  size: 'large' | 'small'
}

const StyledCell = styled(Box)<StyledCellProps>(({ bold, size }) => ({
  fontSize: size === 'small' ? fontSize[14] : fontSize[16],
  fontWeight: bold ? 'bold' : 'unset',
}))

interface Props {
  bold?: boolean
  children: React.ReactNode
  size?: 'large' | 'small'
}

const TableCell = ({ bold = false, children, size = 'large' }: Props) => (
  <StyledCell bold={bold} size={size}>
    <Typography>{children}</Typography>
  </StyledCell>
)

export default TableCell
