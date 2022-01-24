import { renderHook } from '@testing-library/react-hooks'
import useGetActions from '../hooks/history/useGetActions'
import CustomWrapper from './wrapper'

describe('useGetActions', () => {
  it('should fetch root actions', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetActions(
          { account: 'eosio.token', limit: 2 },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.actions.length === 2)
  })
})
