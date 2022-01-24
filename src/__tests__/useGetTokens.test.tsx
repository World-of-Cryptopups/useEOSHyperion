import { renderHook } from '@testing-library/react-hooks'
import useGetTokens from '../hooks/state/useGetTokens'
import CustomWrapper from './wrapper'

describe('useGetTokens', () => {
  it('should fetch account tokens', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetTokens({ account: 'eosio' }, 'https://testnet.waxsweden.org'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.account === 'eosio')
  })
})
