import { renderHook } from '@testing-library/react-hooks'
import useGetAccount from '../hooks/state/useGetAccount'
import CustomWrapper from './wrapper'

describe('useGetAccount', () => {
  it('should fetch account', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetAccount(
          { account: 'eosio', limit: 2 },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.account.account_name === 'eosio')
    expect(result.current.data?.actions.length === 2)
  })
})
