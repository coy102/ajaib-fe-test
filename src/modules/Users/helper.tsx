import { ColDef } from '~/components/CustomTable'

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
