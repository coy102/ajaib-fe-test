import { ColDef } from '~/components/CustomTable'
import { GetUsersParam } from '~/services/hooks/users'

export const DEFAULT_PARAM_USERS: GetUsersParam = {
  results: 50,
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
    renderCell: ({ registered }) =>
      `${registered.date} - age: ${registered.age}`,
  },
]
