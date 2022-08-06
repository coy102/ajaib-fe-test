import { act, renderHook } from '@testing-library/react-hooks'

import mockAxios from 'jest-mock-axios'

import { catchFn, finallyFn } from '~/tests/mocks'

import { useAxios } from '../useAxios'

import {
  expectedEmptyResultHook,
  expectedResponseData,
  expectedResultHook,
} from './dummy'

const config = {
  baseURL: 'https://randomuser.me/',
  url: 'api/',
}

const fetchData = expect.any(Function)

describe('test useAxios', () => {
  afterEach(() => {
    mockAxios.reset()
    jest.clearAllMocks()
  })

  test('should return response at the first time', async () => {
    mockAxios.request.mockResolvedValueOnce({
      data: expectedResponseData,
    })

    const { result } = renderHook(() => useAxios(config))

    await act(async () => {
      await result.current.fetchData().catch(catchFn).finally(finallyFn)
    })

    expect(result.current).toEqual({
      fetchData,
      ...expectedResultHook,
    })
  })

  test('should return error api calls', async () => {
    mockAxios.request.mockRejectedValue(new Error('Network Error'))

    const { result } = renderHook(() => useAxios(config))

    await act(async () => {
      await result.current.fetchData().catch(catchFn).finally(finallyFn)
    })

    expect(result.current).toEqual({
      fetchData,
      ...expectedEmptyResultHook,
    })
  })
})
