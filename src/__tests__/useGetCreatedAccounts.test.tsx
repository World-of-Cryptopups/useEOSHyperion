import { renderHook } from '@testing-library/react-hooks'
import useGetCreatedAccounts from '../hooks/history/useGetCreatedAccounts'
import CustomWrapper from './wrapper'

describe('useGetCreatedAccounts', () => {
  it('should fetch created accounts', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetCreatedAccounts(
          { account: 'eosio', limit: 2 },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.accounts.length === 2)
  })
})
