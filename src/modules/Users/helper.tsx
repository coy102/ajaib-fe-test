import dayjs from 'dayjs'

import { ColDef } from '~/components/CustomTable'
import { GetUsersParam } from '~/services/hooks/users'

export interface SortingState {
  orderBy: string
  order?: 'asc' | 'desc'
}

export const DEFAULT_SORTING: SortingState = {
  orderBy: '',
  order: 'asc',
}

export const DEFAULT_PARAM_USERS: GetUsersParam = {
  results: 10,
  page: 1,
}

export const columnsTable: ColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    sorting: true,
    renderCell: ({ name }) => `${name.title} ${name.first} ${name.last}`,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    sorting: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    sorting: true,
  },
  {
    field: 'registered',
    headerName: 'Registered',
    sorting: true,
    renderCell: ({ registered }) => dayjs(registered.date).format('D MMM YYYY'),
  },
]
