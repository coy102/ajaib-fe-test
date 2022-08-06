import { renderHook } from '@testing-library/react-hooks'

import { mockedUseAxios, mockedFetchData } from '~/mocks/services/useAxios'

import { useGetUsers } from '../users'

import {
  allConfig,
  allParam,
  configGender,
  configKeyword,
  configSorting,
  defaultConfig,
  defaultParam,
  expectedResultGender,
  expectedResultKeyword,
  expectedResultPage1,
  paramGender,
  paramKeyword,
  paramSorting,
} from './users.dummy'

jest.mock('~/services/useAxios', () => mockedUseAxios)

describe('test hooks users service', () => {
  afterEach(jest.clearAllMocks)

  test('should return default response correctly', () => {
    mockedUseAxios.mockImplementation(() => ({
      fetchData: mockedFetchData,
      data: expectedResultPage1,
    }))

    const { result } = renderHook(() => useGetUsers(defaultParam))

    expect(mockedUseAxios).toHaveBeenCalledWith(defaultConfig)

    expect(mockedFetchData).toHaveBeenCalled()
    expect(result.current.data).toEqual(expectedResultPage1)
  })

  test('should return response using gender param only', () => {
    mockedUseAxios.mockImplementation(() => ({
      fetchData: mockedFetchData,
      data: expectedResultGender,
    }))

    const { result } = renderHook(() => useGetUsers(paramGender))

    expect(mockedUseAxios).toHaveBeenCalledWith(configGender)

    expect(mockedFetchData).toHaveBeenCalled()
    expect(result.current.data).toEqual(expectedResultGender)
  })

  test('should return response using keyword param only', () => {
    mockedUseAxios.mockImplementation(() => ({
      fetchData: mockedFetchData,
      data: expectedResultKeyword,
    }))

    const { result } = renderHook(() => useGetUsers(paramKeyword))

    expect(mockedUseAxios).toHaveBeenCalledWith(configKeyword)

    expect(mockedFetchData).toHaveBeenCalled()
    expect(result.current.data).toEqual(expectedResultKeyword)
  })

  test('should return response using sorting order param only', () => {
    mockedUseAxios.mockImplementation(() => ({
      fetchData: mockedFetchData,
      data: expectedResultPage1,
    }))

    const { result } = renderHook(() => useGetUsers(paramSorting))

    expect(mockedUseAxios).toHaveBeenCalledWith(configSorting)

    expect(mockedFetchData).toHaveBeenCalled()
    expect(result.current.data).toEqual(expectedResultPage1)
  })

  test('should return response using all parameters ', () => {
    mockedUseAxios.mockImplementation(() => ({
      fetchData: mockedFetchData,
      data: expectedResultPage1,
    }))

    const { result } = renderHook(() => useGetUsers(allParam))

    expect(mockedUseAxios).toHaveBeenCalledWith(allConfig)

    expect(mockedFetchData).toHaveBeenCalled()
    expect(result.current.data).toEqual(expectedResultPage1)
  })
})
