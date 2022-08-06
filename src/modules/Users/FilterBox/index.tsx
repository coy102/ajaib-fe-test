import { memo } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, MenuItem, TextField } from '@mui/material'

import { GENDER_OPTIONS } from '~/config/constants'

interface Props {
  gender: string
  handleChangeGender: (e) => void
  handleChangeSearch: (e) => void
  handleClickResetFilter: () => void
  searchRef: any
}

const FilterBox = ({
  gender,
  handleChangeGender,
  handleChangeSearch,
  handleClickResetFilter,
  searchRef,
}: Props) => (
  <Box display="flex" alignItems="center" my={5}>
    <Box>
      <TextField
        inputRef={searchRef}
        size="small"
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
        size="small"
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
    <Box>
      <Button onClick={handleClickResetFilter}>Reset Filter</Button>
    </Box>
  </Box>
)
export default memo(FilterBox)
