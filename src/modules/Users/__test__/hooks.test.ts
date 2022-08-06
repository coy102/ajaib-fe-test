import { act, renderHook } from '@testing-library/react-hooks'
import { useRef } from 'react'

import { mockedPush, mockedUseRouter } from '~/mocks/next/useRouter'
import { mockedUseGetUsers } from '~/mocks/services/hooks/users'

import useHooks from '../hooks'

import {
  defaultParam,
  defaultResult,
  inputGender,
  paramGender,
  paramOrderByAsc,
  paramOrderByAscN1,
  paramPage,
  paramSearch,
  response,
  responseChangePage,
  responseGender,
  responseSearch,
  resultGender,
  resultOrderByAsc,
  resultPage,
  resultResetFilter,
  resultSearch,
} from './hooks.dummy'

jest.mock('~/services/hooks/users', () => ({
  useGetUsers: mockedUseGetUsers,
}))

jest.mock('next/router', () => ({
  useRouter: mockedUseRouter,
}))

jest.mock('react', () => {
  const originReact = jest.requireActual('react')
  const mUseRef = jest.fn()
  return {
    ...originReact,
    useRef: mUseRef,
  }
})

const expectedMethods = {
  debouncedHandleChangeSearch: expect.any(Function),
  handleChangeGender: expect.any(Function),
  handleChangePage: expect.any(Function),
  handleClickResetFilter: expect.any(Function),
  handleRequestSort: expect.any(Function),
}

describe('test modules users hooks', () => {
  afterEach(jest.clearAllMocks)

  test('should return default state on the first time', () => {
    mockedUseGetUsers.mockImplementationOnce(() => ({
      data: {
        response,
        loading: false,
      },
    }))

    const { result } = renderHook(() => useHooks())

    expect(mockedUseGetUsers).toHaveBeenCalledTimes(1)
    expect(mockedUseGetUsers).toHaveBeenCalledWith(defaultParam)

    expect(result.current).toEqual({ ...defaultResult, ...expectedMethods })
  })

  test('should return users using gender filter', () => {
    mockedUseGetUsers.mockImplementation(() => ({
      data: {
        response: responseGender,
        loading: false,
      },
    }))

    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleChangeGender(inputGender as any)
    })

    expect(mockedUseGetUsers).toHaveBeenCalledTimes(2)
    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(1, defaultParam)
    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(2, paramGender)

    expect(result.current).toEqual({ ...resultGender, ...expectedMethods })
  })

  test('should return users using search box', async () => {
    jest.useFakeTimers('modern')

    const mockedUseRef = useRef as jest.Mock

    mockedUseRef.mockReturnValue({
      current: {
        value: 'muktit',
      },
    })

    mockedUseGetUsers.mockImplementation(() => ({
      data: {
        response: responseSearch,
        loading: false,
      },
    }))

    const { result } = renderHook(() => useHooks())

    await act(async () => {
      result.current.debouncedHandleChangeSearch({
        target: { value: 'muktit' },
      } as any)
      jest.advanceTimersByTime(500)
    })

    expect(mockedUseGetUsers).toHaveBeenCalledTimes(2)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(1, defaultParam)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(2, paramSearch)

    expect(result.current).toEqual({ ...resultSearch, ...expectedMethods })
  })

  test('should handle reset filter correctly', async () => {
    mockedUseGetUsers.mockImplementation(() => ({
      data: {
        response,
        loading: false,
      },
    }))

    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleClickResetFilter()
    })

    expect(mockedUseGetUsers).toHaveBeenCalledTimes(1)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(1, defaultParam)

    expect(result.current).toEqual({ ...resultResetFilter, ...expectedMethods })
  })

  test('should return result pagination', async () => {
    mockedUseGetUsers.mockImplementation(() => ({
      data: {
        response: responseChangePage,
        loading: false,
      },
    }))

    mockedUseRouter.mockImplementation(() => ({
      push: mockedPush,
      query: {
        page: 2,
      },
    }))

    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleChangePage(undefined, 2)
    })

    expect(mockedPush).toBeCalledWith('/?page=2')

    expect(mockedUseGetUsers).toHaveBeenCalledTimes(1)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(1, paramPage)

    expect(result.current).toEqual({ ...resultPage, ...expectedMethods })
  })

  test('should return result using sorting column by ASC', async () => {
    mockedUseGetUsers.mockImplementation(() => ({
      data: {
        response,
        loading: false,
      },
    }))

    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleRequestSort(undefined, 'email')
    })

    expect(mockedUseGetUsers).toHaveBeenCalledTimes(2)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(1, paramOrderByAscN1)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(2, paramOrderByAsc)

    expect(result.current).toEqual({ ...resultOrderByAsc, ...expectedMethods })
  })

  test('should return result using sorting column by DESC', async () => {
    mockedUseGetUsers.mockImplementation(() => ({
      data: {
        response,
        loading: false,
      },
    }))

    const { result } = renderHook(() => useHooks())

    act(() => {
      result.current.handleRequestSort(undefined, 'email')
    })

    expect(mockedUseGetUsers).toHaveBeenCalledTimes(2)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(1, paramOrderByAscN1)

    expect(mockedUseGetUsers).toHaveBeenNthCalledWith(2, paramOrderByAsc)

    expect(result.current).toEqual({ ...resultOrderByAsc, ...expectedMethods })
  })
})
