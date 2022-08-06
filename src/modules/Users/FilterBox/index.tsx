import { memo } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { Box, MenuItem, TextField } from '@mui/material'

import { GENDER_OPTIONS } from '~/config/constants'

interface Props {
  gender: string
  handleChangeGender: (e) => void
  handleChangeSearch: (e) => void
}

const FilterBox = ({
  gender,
  handleChangeGender,
  handleChangeSearch,
}: Props) => (
  <Box display="flex" my={5}>
    <Box>
      <TextField
        label="Search"
        name="search"
        id="input-search"
        variant="outlined"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        onChange={handleChangeSearch}
      />
    </Box>
    <Box mx={3}>
      <TextField
        name="search"
        id="input-search"
        variant="outlined"
        onChange={handleChangeGender}
        value={gender}
        fullWidth
        select
      >
        {GENDER_OPTIONS.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  </Box>
)

export default memo(FilterBox)
