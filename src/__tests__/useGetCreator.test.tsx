import { renderHook } from '@testing-library/react-hooks'
import useGetCreator from '../hooks/history/useGetCreator'
import CustomWrapper from './wrapper'

describe('useGetCreator', () => {
  it('should fetch account creator', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetCreator('eosio.token', 'https://testnet.waxsweden.org'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.creator === 'eosio')
    expect(result.current.data?.account === 'eosio.token')
  })
})
