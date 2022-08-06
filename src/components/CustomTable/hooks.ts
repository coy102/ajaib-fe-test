import { useCallback, useMemo, useState } from 'react'

import { getComparator, tranformDataTables } from './helper'

const useHooks = ({ data }) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = useState('')

  const transformedDataSource = useMemo(
    () => tranformDataTables(data, getComparator(order, orderBy)),
    [data, order, orderBy]
  )

  const handleRequestSort = useCallback(
    (event, property) => {
      const isAsc = orderBy === property && order === 'asc'
      setOrder(isAsc ? 'desc' : 'asc')
      setOrderBy(property)
    },
    [orderBy, order]
  )

  return {
    order,
    orderBy,
    transformedDataSource,
    handleRequestSort,
  }
}

export default useHooks
